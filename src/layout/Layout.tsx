import * as React from 'react';
import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Header from './Header';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Layout:React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Header />
  </Box>
);
export default Layout;
