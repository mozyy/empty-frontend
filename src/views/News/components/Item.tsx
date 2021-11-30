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
import { LinkProps } from 'react-router-dom';
import Skeleton from '@material-ui/core/Skeleton';
import { Divider } from '@material-ui/core';
import { NewsItem } from '../../../proto/news/news_pb';
import ELink from '../../../components/ELink';

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
        marginRight: 1,
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
  const RenderLink = React.useMemo(() => React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(
    (itemProps, ref) => <ELink to={`/newsDetail/${encodeURIComponent(to)}`} ref={ref} {...itemProps} />,
  ),
  [to]);

  return (
    <ItemView component={RenderLink} avatar={<img src={item.image} referrerPolicy="no-referrer" alt={item.title} width={100} height={100} />}>
      <ListItemText
        primary={item.title}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          '& .MuiListItemText-primary': {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            /* 这个数字是设置要显示省略号的行数 */
            WebkitBoxOrient: 'vertical',
          },
        }}
        classes={{
          // primary: {
          //   color: 'red',
          //   textOverflow: 'ellipsis',
          //   overflow: 'hidden',
          //   display: '-webkit-box',
          //   WebkitLineClamp: 2,
          //   /* 这个数字是设置要显示省略号的行数 */
          //   WebkitBoxOrient: 'vertical',
          // },
        }}
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
