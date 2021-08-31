import grpcWeb from 'grpc-web';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { grpcAddress } from '../env';
import { oauthState } from '../store/atoms';
import { UnaryInterceptorAuth } from '../utils/grpcClient';
import { useOauthRefresh } from './oauth';

// TODO: type args should better
const useGrpcClient = <T>(Client:new (...args:any[]) => T) => {
  const oauth = useRecoilValue(oauthState);
  const oauthRefresh = useOauthRefresh();
  return useMemo(() => {
    const intercept:grpcWeb.UnaryInterceptor<any, any>['intercept'] = async (request, invoker) => {
      const handler = async () => {
        const reqMeta = request.getMetadata();
        const token = oauth;
        if (token) {
          if (token.expired()) {
            await oauthRefresh();
            return Promise.reject(Error('token refresh ing'));
          }
          reqMeta.Authorization = reqMeta.Authorization ?? `${'Bearer'} ${token.accessToken}`;
        }
        const response = await invoker(request).catch(async (e: grpcWeb.Error) => {
          if (e.code === grpcWeb.StatusCode.UNAUTHENTICATED) {
            await oauthRefresh();
          }
          console.error('grpc error:', (request.getMethodDescriptor() as any)?.name, e, request.getRequestMessage().toObject());
          return Promise.reject(e);
        });
        console.log('%c[rpc]: ', 'color: red', (request.getMethodDescriptor() as any)?.name,
          request.getRequestMessage().toObject(), response.getResponseMessage().toObject());
        // @ts-ignore
        return response.toObject();
      };
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw handler();
    };
    return new Client(grpcAddress, {},
      { unaryInterceptors: [new UnaryInterceptorAuth(intercept)] });
  }, [Client, oauth, oauthRefresh]);
};

export default useGrpcClient;
