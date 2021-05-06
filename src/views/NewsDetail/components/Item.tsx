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
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
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
  const to = obj.link;
  const renderLink = React.useMemo(() => React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(
    (itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />,
  ),
  [to]);
  return (
    <ListItem sx={{ alignItems: 'stretch' }} component={renderLink}>
      <ListItemAvatar>
        <img src={obj.image} referrerPolicy="no-referrer" alt={obj.title} />
      </ListItemAvatar>
      <ListItemText
        primary={obj.title}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
        secondary={(
          <StyledBox>
            <Typography variant="body2" align="center" alignItems="cneter">
              <AccessTimeIcon fontSize="small" />
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
