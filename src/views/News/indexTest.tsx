import React, {
// useRef,
} from 'react';
import { selectorFamily, useRecoilValue } from 'recoil';
// import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
// import { grpcAddress } from '../../env';
// import { NewsClient } from '../../proto/news/NewsServiceClientPb';

// const server = new NewsClient(grpcAddress);

const newsList = selectorFamily({
  key: 'newsList222', // unique ID (with respect to other atoms/selectors)
  get: (i:string) => async () => {
    const temp = await new Promise<string>((r) => {
      setTimeout(() => r(`aaaaa${i}`), 2000);
    });
    console.log(3333, temp);
    return temp;
  }
  , // default value (aka initial value)
});

const News: React.FC = () => {
  // useOauth();
  // const s = useRef('start1');
  console.log(111);
  const news = useRecoilValue(newsList('temp'));
  console.log(111222, news);
  return <div>{news as string}</div>;
};

export default News;
