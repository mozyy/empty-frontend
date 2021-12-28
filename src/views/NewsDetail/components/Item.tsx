import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CommentIcon from '@mui/icons-material/Comment';
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
