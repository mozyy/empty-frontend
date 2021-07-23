import Box from '@material-ui/core/Box';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout:React.FC = ({ children }) => (
  <Box sx={{
    flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh',
  }}
  >
    <Header />
    <Box sx={{
      flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'auto',
    }}
    >
      {children}
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Footer />
      </Box>
    </Box>
  </Box>
);

export default Layout;
