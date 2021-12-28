import Box from '@mui/material/Box';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout:React.FC = () => {
  const { key } = useLocation();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const top = sessionStorage.getItem(`_locationTop_${key}`);
    console.log(222222, boxRef.current, top, key);
    if (boxRef.current) {
      setTimeout(() => {
        if (boxRef.current) {
          boxRef.current.scrollTo({ top: Number(top) || 0 });
        }
      }, 1000);
    }
    return () => {
      console.log(444444444, boxRef.current?.scrollTop, key);
      if (boxRef.current) {
        sessionStorage.setItem(`_locationTop_${key}`, String(boxRef.current?.scrollTop));
      }
    };
  }, [key]);

  return (
    <Box sx={{
      flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh',
    }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'auto',
        }}
        ref={boxRef}
      >
        <Outlet />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
