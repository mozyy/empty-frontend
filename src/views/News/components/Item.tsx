import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
// import { Box } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CommentIcon from '@material-ui/icons/Comment';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Skeleton from '@material-ui/core/Skeleton';
import { NewsItem } from '../../../proto/news/news_pb';

export interface ItemProps {
  item: NewsItem.AsObject
}
const StyledTypography = styled((props:TypographyProps) => <Typography variant="body2" component="span" sx={{ display: 'inline-flex' }} alignItems="center" {...props} />)({

  // backgroundColor: '#292929'
});

interface ItemViewProps {
  avatar: React.ReactNode
  component?: React.ElementType
}

export const ItemView: React.FC<ItemViewProps> = (props) => {
  const { avatar, children, component = 'div' } = props;

  const theme = useTheme();

  return (
    <ListItem sx={{ alignItems: 'stretch' }} component={component}>
      <ListItemAvatar sx={{
        width: theme.typography.pxToRem(100),
        height: theme.typography.pxToRem(100),
      }}
      >
        {avatar}
      </ListItemAvatar>
      {children}
    </ListItem>
  );
};

export const ItemViewSkeleton: React.FC = () => (
  <ItemView avatar={<Skeleton variant="circular" />}>
    <Skeleton variant="rectangular" width={210} height={118} />
  </ItemView>
);

export const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;
  const to = item.link;
  const renderLink = React.useMemo(() => React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(
    (itemProps, ref) => <RouterLink to={`/newsDetail/${encodeURIComponent(to)}`} ref={ref} {...itemProps} />,
  ),
  [to]);

  return (
    <ItemView component={renderLink} avatar={<img src={item.image} referrerPolicy="no-referrer" alt={item.title} />}>
      <ListItemText
        primary={item.title}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
        secondary={(
          <>
            {/* <StyledBox> */}
            <StyledTypography>
              <AccessTimeIcon fontSize="small" />
              {item.time}
            </StyledTypography>
            {!!item.view && (
            <StyledTypography>
              <EqualizerIcon />
              {item.view}
            </StyledTypography>
            )}
            {!!item.comment && (
            <StyledTypography>
              <CommentIcon />
              {item.comment}
            </StyledTypography>
            )}
            {/* </StyledBox> */}
          </>
        )}
      />
    </ItemView>

  );
};
