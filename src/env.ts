import { PaletteOptions } from '@mui/material';
import { blue, pink, yellow } from '@mui/material/colors';

const envStr = process.env.REACT_APP_MODE || 'dev';

interface EnvConfig {
  host: string,
  PaletteOptions: PaletteOptions
  // grpcAddress: string,
}

const configs:{ [key: string]: EnvConfig } = {
  dev: {
    host: 'http://localhost:50052',
    PaletteOptions: {
      primary: blue,
    },
  },
  test: {
    host: 'http://localhost:50053',
    PaletteOptions: {
      primary: blue,
    },
  },
  prod: {
    host: '',
    PaletteOptions: {
      primary: pink,
      secondary: blue,
    },
  },
};

export const envConfig = configs[envStr];

export const grpcAddress = `${envConfig.host}/i/api`;
