import Box from '@material-ui/core/Box';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout:React.FC = () => (
  <Box sx={{
    flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh',
  }}
  >
    <Header />
    <Box sx={{
      flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'auto',
    }}
    >
      <Outlet />
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Footer />
      </Box>
    </Box>
  </Box>
);

export default Layout;
