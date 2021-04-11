import * as React from 'react';
import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { Header } from './Header';
import Footer from './Footer';

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

export const Layout:React.FC = ({children}) => {
  

  return (
    <Box sx={{ flexGrow: 1, display: 'flex',flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box  sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
