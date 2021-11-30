import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import React, { useMemo } from 'react';
import List from '@material-ui/core/List';
import {
  Avatar, Box, Divider, ListItem, ListSubheader, Skeleton,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { selector, useRecoilValue } from 'recoil';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { NewsItem } from '../../proto/news/news_pb';
import { Item } from './components/Item';
import { grpcAddress } from '../../env';
import { useClientNews } from '../../hooks/clients';
import { useGrpcRequest } from '../../hooks/grpcRequest';
// import useOauth from '../../hooks/oauth';
// interface NewsClass {
//   type: string
//   list:
// }

const newsTypeMap: { [key: string]: string } = {
  it_tech: '业界资讯',
  science: '科学资讯',
  movie: '影视资讯',
  game: '游戏资讯',
  comic: '动漫资讯',
  funny: '趣闻资讯',
  music: '音乐资讯',
};

const News: React.FC = () => {
  // const [news, setNews] = useState<NewsItem.AsObject[]>([]);
  // const [loading, setLoading] = useState(true);
  // console.log(loading);
  const { data, loading, error } = useGrpcRequest(useClientNews('list'),
    new Empty());

  const category = useMemo(() => {
    const cate: { [key: string]: NewsItem.AsObject[] } = {};

    data?.toObject().listList.forEach((item) => {
      if (!cate[item.type]) {
        cate[item.type] = [item];
      } else {
        cate[item.type].push(item);
      }
    });
    return cate;
  }, [data]);

  return (
    <List sx={{}}>
      {Object.entries(category).map(([type, item]) => (
        <ListItem key={type}>
          <Paper sx={{ flex: 'auto' }}>
            <List>
              <ListSubheader>{newsTypeMap[type]}</ListSubheader>
              {item.map((i) => (
                <Box key={i.link}>
                  <Divider component="li" />
                  <Item item={i} />
                </Box>
              ))}
            </List>
          </Paper>
        </ListItem>
      ))}
      {loading && Array.from({ length: 4 }, (v, i) => (
        <ListItem key={i}>
          <Paper sx={{ flex: 'auto' }}>
            <List sx={{ paddingX: 2, paddingY: 1, display: 'flex' }}>
              <Skeleton variant="rectangular" sx={{ mr: 1 }} width={100} height={100} />
              <Box sx={{ flex: 'auto' }}>
                <Skeleton height={24} />
                <Skeleton height={24} width="80%" />
                <Skeleton height={20} width={80} sx={{ mt: 2 }} />
              </Box>
            </List>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
};

export default News;
