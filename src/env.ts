const envStr = 'dev';

const configs = {
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
