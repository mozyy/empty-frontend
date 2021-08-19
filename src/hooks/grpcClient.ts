import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { grpcAddress } from '../env';
import { oauthState } from '../store/atoms';
import { UnaryInterceptorAuth } from '../utils/grpcClient';

// TODO: type args should better
const useGrpcClient = <T>(Client :new (...args:any[]) => T) => {
  const oauth = useRecoilValue(oauthState);
  return useMemo(() => new Client(grpcAddress, {},
    { unaryInterceptors: [new UnaryInterceptorAuth(oauth)] }), [Client, oauth]);
};

export default useGrpcClient;
