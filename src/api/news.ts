import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import useSWRImmutable from 'swr/immutable';
import { grpcAddress } from '../env';
import { getSwrKeys, useClientNews } from '../hooks/clients';
import { NewsClient } from '../proto/news/NewsServiceClientPb';
import { DetailRequest, ListResponse } from '../proto/news/news_pb';
import { UnaryInterceptorAuth } from '../utils/grpcClient';
import { KeysSwr } from './keys';

const emptys = new Empty();
// const t = useClientNews('list');
export const useApiNewsList = () => {
  const list = useClientNews('list');
  console.log(6666666, list,
    new NewsClient(grpcAddress, {}, { unaryInterceptors: [new UnaryInterceptorAuth()] }));
  // useSWRImmutable(['list', new Empty()]));
  return useSWRImmutable<ListResponse>(getSwrKeys(NewsClient, 'list', new Empty()),
    { dedupingInterval: 1 * 1000 });
};
