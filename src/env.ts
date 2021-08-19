const envStr = process.env.REACT_APP_MODE || 'dev';

interface EnvConfig {
  host: string,
  // grpcAddress: string,
}

const configs:{ [key: string]: EnvConfig } = {
  dev: {
    host: 'http://localhost:50052',
  },
  test: {
    host: 'http://localhost:50053',
  },
  prod: {
    host: 'https://yyue.vip',
  },
};

const envConfig = configs[envStr];
export const grpcAddress = `${envConfig.host}/i/api`;

export default envConfig;
