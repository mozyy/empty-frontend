import Button from '@material-ui/core/Button';
import {
  createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { zhCN } from '@material-ui/core/locale';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import { Routers } from './router/Routers';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
},zhCN);

const App:FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routers />
        </ThemeProvider>
      </Router>
    </RecoilRoot>

  );
};

export default App;
