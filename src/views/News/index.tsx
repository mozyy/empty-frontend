import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import React, { useEffect, useMemo, useState } from 'react';
import List from '@material-ui/core/List';
import { ListItem, ListSubheader } from '@material-ui/core';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { NewsItem } from '../../proto/news/news_pb';
import { Item } from './components/Item';
import envConfig from '../../env';

// interface NewsClass {
//   type: string
//   list:
// }

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem.AsObject[]>([]);

  useEffect(() => {
    // class NewsService {
    //   constructor(public newsService:EmptyClient) {}
    // }
    const newsService = new NewsClient(envConfig.grpcAddress);
    newsService.list(new Empty(), null).then((res) => {
      console.log(res.toObject());
      setNews(res.toObject().listList);
    });
    // const stream = newsService.news(new Empty());
    // stream.on('data', (res) => {
    //   console.log(123, res.toObject());
    // });
  }, []);

  const category = useMemo(() => {
    const cate:{ [key: string]:NewsItem.AsObject[] } = {};

    news.forEach((item) => {
      if (!cate[item.type]) {
        cate[item.type] = [item];
      } else {
        cate[item.type].push(item);
      }
    });
    return cate;
  }, [news]);

  return (
    <List>
      {Object.entries(category).map(([type, item]) => (
        <ListItem key={type}>
          <List>
            <ListSubheader>{type}</ListSubheader>
            {item.map((i) => <Item item={i} key={i.link} />)}
          </List>
        </ListItem>
      ))}
    </List>
  );
};

export default News;
