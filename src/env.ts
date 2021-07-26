const envStr = process.env.REACT_APP_MODE || 'dev';

interface EnvConfig {
  grpcAddress: string,
}

const configs:{ [key: string]: EnvConfig } = {
  dev: {
    grpcAddress: 'http://localhost:50051/api',
  },
  test: {
    grpcAddress: 'http://localhost:50051/api',
  },
  prod: {
    grpcAddress: 'https://yyue.vip/api',
  },
};

const envConfig = configs[envStr];

export default envConfig;
