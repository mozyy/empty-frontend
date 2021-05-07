import {
  Box, Divider, Skeleton, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import envConfig from '../../env';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { DetailRequest, DetailResponse } from '../../proto/news/news_pb';

const StyledImg = styled('img')({
  width: '100%',
  // backgroundColor: '#292929'
});

const NewsDetail: React.FC = () => {
  const [detail, setDetail] = useState<DetailResponse.AsObject>();
  const { link } = useParams<{ link: string }>();
  console.log(link);
  useEffect(() => {
    // class NewsService {
    //   constructor(public newsService:EmptyClient) {}
    // }
    const newsService = new NewsClient(envConfig.grpcAddress);
    const detailRequest = new DetailRequest();
    detailRequest.setUrl(decodeURIComponent(link));
    newsService.detail(detailRequest, null).then((res) => {
      console.log(res.toObject());
      setDetail(res.toObject());
    });
    // const stream = newsService.news(new Empty());
    // stream.on('data', (res) => {
    //   console.log(123, res.toObject());
    // });
  }, [link]);

  return (
    <Box sx={{ padding: 1 }}>
      {detail ? (
        <Box>
          <Typography variant="h5">
            {detail.title}
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {detail.from}
            {detail.time}
          </Typography>
          <Typography color="text.secondary" variant="body2" sx={{ m: 1 }}>
            {detail.summary}
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {detail.contentList.map((item) => (
            item.type === 1 ? (
              <Typography>
                {item.content}
              </Typography>
            )
              : <StyledImg src={item.content} referrerPolicy="no-referrer" alt={detail.title} loading="lazy" />
          ))}
        </Box>
      ) : (
        <Box>
          <Skeleton />
        </Box>
      )}
    </Box>
  );
};

export default NewsDetail;
