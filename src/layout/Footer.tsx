import * as React from 'react';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, Box } from '@mui/material';

const Footer:React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      © 2021-
      {year}
      {' '}
      {window.location.hostname}
      {' '}
      版权所有
      <br />
      <Link href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">蜀ICP备2021007564号-1</Link>
    </Box>
  );
};

export default Footer;
