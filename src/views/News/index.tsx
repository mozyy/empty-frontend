import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import React, { useMemo } from 'react';
import List from '@material-ui/core/List';
import { ListItem, ListSubheader } from '@material-ui/core';
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

const newsTypeMap:{ [key: string]: string } = {
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
    const cate:{ [key: string]:NewsItem.AsObject[] } = {};

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
          <Paper>
            <List>
              <ListSubheader>{ newsTypeMap[type] }</ListSubheader>
              {item.map((i) => <Item item={i} key={i.link} />)}
            </List>
          </Paper>
        </ListItem>
      ))}
      {/* {loading && <Skeleton variant="circular">
      <Avatar />
    </Skeleton>} */}
    </List>
  );
};

export default News;
