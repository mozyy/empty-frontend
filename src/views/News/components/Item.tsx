import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CommentIcon from '@material-ui/icons/Comment';
import { NewsItem } from '../../../proto/news/news_pb';

export interface ItemProps {
  item: NewsItem
}
const StyledBox = styled(Box)({
  display: 'flex',

  // backgroundColor: '#292929'
});

export const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;
  const obj = item.toObject();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <img src={obj.image} referrerPolicy="no-referrer" alt={obj.title} />
      </ListItemAvatar>
      <ListItemText
        primary={obj.title}
        secondary={(
          <StyledBox>
            <Typography variant="body2" align="center">
              <AccessTimeIcon />
              {obj.time}
            </Typography>
            <Typography>
              <EqualizerIcon />
              {obj.view}
            </Typography>
            <Typography>
              <CommentIcon />
              {obj.comment}
            </Typography>
          </StyledBox>
        )}
      />
    </ListItem>
  );
};
