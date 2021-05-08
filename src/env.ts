const envStr = 'prod';

const configs = {
  dev: {
    grpcAddress: 'https://yyue.vip/api',
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
