import {
  Box, Divider, Skeleton, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { DetailRequest, DetailResponse } from '../../proto/news/news_pb';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { useClientNews } from '../../hooks/clients';

const StyledImg = styled('img')({
  width: '100%',
  // backgroundColor: '#292929'
});

interface Params {
  link: string
}

const NewsDetail: React.FC = () => {
  const { link } = useParams<Params>();
  const detailRequest = new DetailRequest();
  detailRequest.setUrl(decodeURIComponent(link));
  const { data, loading, error } = useGrpcRequest<DetailRequest, DetailResponse>(
    useClientNews('detail'), detailRequest,
  );
  const detail = data?.toObject();
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
          {detail.contentList.map((item, index) => (
            item.type === 1 ? (
              <Typography key={index}>
                {item.content}
              </Typography>
            )
              : <StyledImg key={index} src={item.content} referrerPolicy="no-referrer" alt={detail.title} loading="lazy" />
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
