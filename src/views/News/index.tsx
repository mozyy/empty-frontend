import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { NewsItem } from '../../proto/news/news_pb';
import { Item } from './components/Item';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    // class NewsService {
    //   constructor(public newsService:EmptyClient) {}
    // }
    const newsService = new NewsClient('https://yyue.vip/api');
    newsService.newsList(new Empty(), null).then((res) => {
      console.log(res.toObject());
      setNews(res.getListList());
    });
  }, []);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {news.map((item) => <Item item={item} key={item.getLink()} />)}
    </List>
  );
};

export default News;
