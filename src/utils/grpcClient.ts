import * as grpcWeb from 'grpc-web';

export class UnaryInterceptorAuth<REQ, RESP> implements grpcWeb.UnaryInterceptor<REQ, RESP> {
  constructor(public intercept:grpcWeb.UnaryInterceptor<REQ, RESP>['intercept']) {
  }
}

export default {};
