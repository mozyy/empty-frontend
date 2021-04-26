import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import React, { useEffect } from 'react';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';

const News: React.FC = () => {
  useEffect(() => {
    // class NewsService {
    //   constructor(public newsService:EmptyClient) {}
    // }
    const newsService = new NewsClient('http://localhost:8080');
    newsService.newsList(new Empty(), null).then((res) => {
      console.log(res.toObject());
    });
  }, []);
  return null;
};

export default News;
