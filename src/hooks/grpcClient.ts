import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import envConfig from '../env';
import { oauthState } from '../store/atoms';
import { UnaryInterceptorAuth } from '../utils/grpcClient';

class ClientT {
  constructor(hostname: string,
    credentials?: null | { [index: string]: string; },
    options?: null | { [index: string]: any; }) {
    return this;
  }
}

const useGrpcClient = <T extends ClientT>(Client:T) => {
  const oauth = useRecoilValue(oauthState);
  return useMemo(() => new Client(envConfig.grpcAddress, {},
    { unaryInterceptors: [new UnaryInterceptorAuth(oauth)] }), [Client, oauth]);
};

export default useGrpcClient;
