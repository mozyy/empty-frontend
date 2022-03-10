import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import List from '@mui/material/List';
import {
  Avatar, Box, Divider, ListItem, ListSubheader, Skeleton,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { selector, useRecoilValue } from 'recoil';
import useSWR, { useSWRConfig } from 'swr';
import useSWRImmutable from 'swr/immutable';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { DetailResponse, ListResponse, NewsItem } from '../../proto/news/news_pb';
import { Item } from './components/Item';
import { grpcAddress } from '../../env';
import { useClientNews } from '../../hooks/clients';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { newsClient } from '../../grpcClients/news';
import { clientStateNews } from '../../store/atoms/clients';
import { useApiNewsList } from '../../api/news';
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

let listValue:ListResponse;
const emptys = new Empty();

const News: React.FC = () => {
  const params = useMemo(() => new Empty(), []);
  const t = useClientNews('list');
  // const {
  //   data: dataS, error: errorS, mutate,
  // } = useSWRImmutable(emptys, useClientNews('list'));
  const {
    data: dataS, error: errorS, mutate,
  } = useApiNewsList();
  const { cache } = useSWRConfig();
  const [dataA, setList] = useState<ListResponse>();

  const data = dataS;

  const category = useMemo(() => {
    const cate: { [key: string]: NewsItem.AsObject[] } = {};
    if (data) {
      data?.toObject().listList.forEach((item) => {
        if (!cate[item.type]) {
          cate[item.type] = [item];
        } else {
          cate[item.type].push(item);
        }
      });
    }
    return cate;
  }, [data]);
  console.log(22323232, cache, data, dataS, errorS, mutate, cache);

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
      {Array.from({ length: 4 }, (v, i) => (
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
