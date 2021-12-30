import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { FC, ReactElement, ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { RouteObject } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RouteItem } from '../store/atoms/routes';

interface ItemProps {
  icon?: ReactNode
  name?: ReactNode
}
const index = 1;

export const Item:FC<ItemProps> = ({ icon, name = `子菜单${index}` }) => (
  <MenuItem>
    <ListItemIcon>
      {icon || <ContentCut fontSize="small" />}
    </ListItemIcon>
    <ListItemText>{name}</ListItemText>
    <Typography variant="body2" color="text.secondary">
      ⌘X
    </Typography>
  </MenuItem>
);
interface ListProps {
  routes: RouteItem[]
}

export const List:FC<ListProps> = ({ routes }) => (
  <MenuList>
    {routes.map((route, i) => (route.children?.length ? (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={route.name}
          id={route.name}
        >
          <Typography>{route.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List routes={route.children} />
        </AccordionDetails>
      </Accordion>
    ) : (
      <Item
        key={route?.path || i}
        icon={<ContentCopy fontSize="small" />}
        name={route.name}
      />
    )))}

  </MenuList>
);
