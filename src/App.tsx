import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import CssBaseline from '@material-ui/core/CssBaseline';
import { zhCN } from '@material-ui/core/locale';
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';
import './App.css';
import Routers from './router/Routers';

const theme = createTheme(
  {
    palette: {
      primary: pink,
      secondary: blue,
    },
  },
  // typography: {
  //   pxToRem: (px: number) => `${(px / 16) * coef}rem`,
  // },
  zhCN,
);

const App: FC = () => (
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

export default App;
