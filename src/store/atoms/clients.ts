import { atom } from 'recoil';
import { grpcAddress } from '../../env';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { UserClient } from '../../proto/user/UserServiceClientPb';
import { UnaryInterceptorAuth } from '../../utils/grpcClient';

export const newsClientState = atom({
  key: 'clients/newsClientState', // unique ID (with respect to other atoms/selectors)
  default: new NewsClient(grpcAddress, {}, { unaryInterceptors: [new UnaryInterceptorAuth()] }),
});

export const userClientState = atom({
  key: 'clients/userClientState', // unique ID (with respect to other atoms/selectors)
  default: new UserClient(grpcAddress, {}, { unaryInterceptors: [new UnaryInterceptorAuth()] }),
});
