import {
  Box, Divider, Skeleton, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import { NewsClient } from '../../proto/news/NewsServiceClientPb';
import { DetailRequest, DetailResponse } from '../../proto/news/news_pb';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { useClientNews } from '../../hooks/clients';

const StyledImg = styled('img')({
  width: '100%',
  // backgroundColor: '#292929'
});

const NewsDetail: React.FC = () => {
  const { link } = useParams();
  const detailRequest = new DetailRequest();
  detailRequest.setUrl(decodeURIComponent(link || ''));
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
          <Divider sx={{ mb: 2 }} />
          {detail.contentList.map((item, index) => (
            item.type === 1 ? (
              <Typography key={index} sx={{ mb: 2 }}>
                {item.content}
              </Typography>
            )
              : (
                <StyledImg
                  sx={{ mb: 2 }}
                  key={index}
                  src={item.content}
                  referrerPolicy="no-referrer"
                  alt={detail.title}
                  loading="lazy"
                />
              )
          ))}
        </Box>
      ) : (
        <Box>
          <Typography variant="h5"><Skeleton /></Typography>
          <Typography variant="h5"><Skeleton width="60%" /></Typography>
          <Typography><Skeleton /></Typography>
          <Typography><Skeleton width="40%" /></Typography>
          <Skeleton height={150} />
        </Box>
      )}
    </Box>
  );
};

export default NewsDetail;
