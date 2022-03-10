import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography, { TypographyProps } from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { experimentalStyled as styled, useTheme } from '@mui/material/styles';
// import { Box } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CommentIcon from '@mui/icons-material/Comment';
import { LinkProps } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { Divider } from '@mui/material';
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
