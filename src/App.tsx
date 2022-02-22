import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { blue, pink } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import { zhCN } from '@mui/material/locale';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';
import './App.css';
import Routers from './router/Routers';
import PullDownRefresh from './components/PullDownRefresh';

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
        <PullDownRefresh>
          <Routers />
        </PullDownRefresh>
      </ThemeProvider>
    </Router>
  </RecoilRoot>
);

export default App;
