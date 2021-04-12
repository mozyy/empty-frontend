import * as React from 'react';
import Box from '@material-ui/core/Box';

import Header from './Header';
import Footer from './Footer';

const Layout:React.FC = ({ children }) => (
  <Box sx={{
    flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh',
  }}
  >
    <Header />
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;
