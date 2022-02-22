import { atom } from 'recoil';
import { grpcAddress } from '../../env';
import { SourcesClient } from '../../proto/manage/SourcesServiceClientPb';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { UserClient } from '../../proto/user/UserServiceClientPb';
import { UnaryInterceptorAuth } from '../../utils/grpcClient';

export const clientStateNews = atom({
  key: 'clients/clientStateNews', // unique ID (with respect to other atoms/selectors)
  default: new NewsClient(grpcAddress, {}, { unaryInterceptors: [new UnaryInterceptorAuth()] }),
});

export const clientStateUser = atom({
  key: 'clients/clientStateUser', // unique ID (with respect to other atoms/selectors)
  default: new UserClient(grpcAddress, {}, { unaryInterceptors: [new UnaryInterceptorAuth()] }),
});

export const clientStateSources = atom({
  key: 'clients/clientStateSources', // unique ID (with respect to other atoms/selectors)
  default: new SourcesClient(grpcAddress, {}, { unaryInterceptors: [new UnaryInterceptorAuth()] }),
});
