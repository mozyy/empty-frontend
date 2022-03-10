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
import { ListResponse, NewsItem } from '../../proto/news/news_pb';
import { Item } from './components/Item';
import { grpcAddress } from '../../env';
import { useClientNews } from '../../hooks/clients';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { newsClient } from '../../grpcClients/news';
import { clientStateNews } from '../../store/atoms/clients';
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

const News: React.FC = () => (
  <List sx={{}}>
    {Array.from({ length: 50 }, (v, i) => (
      <ListItem key={i}>
        <Paper sx={{ flex: 'auto' }}>
          <List sx={{ paddingX: 2, paddingY: 1, display: 'flex' }}>
            {i + 1}
          </List>
        </Paper>
      </ListItem>
    ))}
  </List>
);

export default News;
