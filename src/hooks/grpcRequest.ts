import { Message } from 'google-protobuf';
import grpcWeb from 'grpc-web';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useRecoilValue } from 'recoil';
import { grpcAddress } from '../env';
import { oauthState } from '../store/selectors/oauth';
import { useOauthRefresh } from './oauth';

export interface GrpcHooksRes<REQ, RES> {
  data?: RES|undefined
  loading: boolean
  error?: Error|grpcWeb.Error|undefined
  run: (arg: REQ) => Promise<RES>
}
interface GrpcHooksParams {
  manual?:boolean
}

type GrpcMethod<REQ, RES> =
  ((request:REQ, metadata: grpcWeb.Metadata | null) => Promise<RES>)&
  ((request: REQ, metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: RES) => void)=>grpcWeb.ClientReadableStream<RES>);

export const useGrpcRequest = <REQ extends Message,
  RES extends Message>
  (method:GrpcMethod<REQ, RES>,
    req: REQ | GrpcHooksParams = {}, params?: GrpcHooksParams) => {
  let data:REQ;
  let config:GrpcHooksParams;
  console.log(888, req, Message, req instanceof Message);
  if (req instanceof Message) {
    data = req;
    config = params || {};
  } else {
    config = req;
  }
  const [state, setState] = useState<GrpcHooksRes<REQ, RES>>({
    loading: false,
    run: Promise.reject,
  });
  const oauth = useRecoilValue(oauthState);
  const oauthRefresh = useOauthRefresh();

  const run = useCallback((request:REQ) => {
    if (oauth) {
      if (oauth.expired()) {
        oauthRefresh();
        return Promise.reject(Error('token refresh ing'));
      }
    }
    setState({
      run, loading: true,
    });
    const Authorization = `${'Bearer'} ${oauth?.accessToken}`;
    return method(request, { Authorization })
      .then((res) => {
        setState({
          run, error: undefined, data: res, loading: false,
        });
        return res;
      }, (err: Error|grpcWeb.Error) => {
        if (!(err instanceof Error) && err.code === grpcWeb.StatusCode.UNAUTHENTICATED) {
          oauthRefresh();
        }
        setState((p) => ({
          ...p, error: err, data: undefined, loading: false,
        }));
        return Promise.reject(err);
      });
  }, [method, oauth, oauthRefresh]);

  useEffect(() => {
    if (!config.manual && data) {
      run(data);
    } else {
      setState({ run, loading: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);
  return state;
};
