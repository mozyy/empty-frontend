import React, { } from 'react';

import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { useRecoilValue } from 'recoil';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { newsClientState } from '../../store/atoms/clients';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { useClientNews } from '../../hooks/clients';

const News: React.FC = () => {
  // useOauth();
  // const s = useRef('start1');
  console.log(111, NewsClient);
  // const list = useWrap(NewsClient, 'a', empty);
  // const tem = useGrpcOauth(newsListState, {});
  const newsClient = useClientNews('list');
  const { data, error, loading } = useGrpcRequest(useClientNews('list'), new Empty());
  if (error) {
    return <div>error</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return null;
  }
  return <div>{data.toString() }</div>;
};

export default News;
