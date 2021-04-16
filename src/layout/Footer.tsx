import * as React from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from '@material-ui/core';

const StyledBox = styled(Box)({
  textAlign: 'center',
  // backgroundColor: '#292929'
});

const Footer:React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <StyledBox>
      © 2021-
      {year}
      {' '}
      {window.location.hostname}
      {' '}
      版权所有
      <br />
      <Link href="https://beian.miit.gov.cn" target="_blank" rel="noopener">蜀ICP备2021007564号-1</Link>
    </StyledBox>
  );
};

export default Footer;
