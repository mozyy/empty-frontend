import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  blue, blueGrey, lightBlue, lightGreen, orange, pink, yellow,
} from '@mui/material/colors';
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
import { env } from 'process';
import { Middleware, SWRConfig } from 'swr';
import { Message } from 'google-protobuf';
import { dequal } from 'dequal';
import Routers from './router/Routers';
import PullDownRefresh from './components/PullDownRefresh';
import { envConfig, grpcAddress } from './env';
import { NewsClient } from './proto/news/NewsServiceClientPb';
import { UnaryInterceptorAuth } from './utils/grpcClient';

const theme = createTheme(
  {
    palette: envConfig.PaletteOptions,
  },
  // typography: {
  //   pxToRem: (px: number) => `${(px / 16) * coef}rem`,
  // },
  zhCN,
);

const swrOptions = {
  suspense: true,
  compare: (currentData:any, newData:any) => {
    if (currentData instanceof Message && newData instanceof Message) {
      return dequal(currentData.serializeBinary(), newData.serializeBinary());
    }
    return dequal(currentData, newData);
  },
  use: [(useSWRNext) => (key, fetcher, config) => {
    if (Array.isArray(key)) {
      const [Client, method, params, mate] = key as Array<any>;
      const client = new Client(grpcAddress, {}, {
        unaryInterceptors: [
          new UnaryInterceptorAuth()],
      });
      const serializedKey = `__grpc_${Client.name}_${method}_${params.toString()}_${JSON.stringify(mate)}`;
      console.log(333335, key, fetcher, config, serializedKey);
      return useSWRNext(serializedKey, () => client[method](params, mate), config);
    }
    return useSWRNext(key, fetcher, config);
  }] as Middleware[],
};

const App: FC = () => (
  <RecoilRoot>
    <SWRConfig value={swrOptions}>
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
    </SWRConfig>
  </RecoilRoot>
);

export default App;
