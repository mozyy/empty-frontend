import grpcWeb from 'grpc-web';
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { grpcAddress } from '../env';
import { oauthState } from '../store/atoms';
import { UnaryInterceptorAuth } from '../utils/grpcClient';
import getOAuthUrl from '../utils/oauth';

// TODO: type args should better
const useGrpcClient = <T>(Client:new (...args:any[]) => T) => {
  const [oauth, setOauth] = useRecoilState(oauthState);
  const history = useHistory();
  return useMemo(() => {
    console.log(12342222, history);
    const intercept:grpcWeb.UnaryInterceptor<any, any>['intercept'] = async (request, invoker) => {
      const reqMeta = request.getMetadata();
      const token = oauth;
      if (token) {
        if (token.expired()) {
          const newToken = await token.refresh();
          setOauth(newToken);
          return Promise.reject(Error('token refresh'));
        }
        reqMeta.Authorization = reqMeta.Authorization ?? `${token.tokenType || 'Bearer'} ${token.accessToken}`;
      }
      const response = await invoker(request).catch((e: grpcWeb.Error) => {
        if (e.code === grpcWeb.StatusCode.UNAUTHENTICATED) {
          console.log(getOAuthUrl({
            redirectUri: window.location.href,
          }));
          history.push(getOAuthUrl({
            redirectUri: window.location.href,
            scopes: ['admin'],
          }));
        }
        console.error('grpc error:', (request.getMethodDescriptor() as any)?.name, e);
        return Promise.reject(e);
      });
      console.log(1234, response);
      return response;
    };
    return new Client(grpcAddress, {},
      { unaryInterceptors: [new UnaryInterceptorAuth(intercept)] });
  }, [Client, oauth, setOauth, history]);
};

export default useGrpcClient;
