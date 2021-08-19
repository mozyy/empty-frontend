import * as grpcWeb from 'grpc-web';
import ClientOAuth2 from 'client-oauth2';

export class UnaryInterceptorAuth<REQ, RESP> implements grpcWeb.UnaryInterceptor<REQ, RESP> {
  token?: ClientOAuth2.Token;

  constructor(token:ClientOAuth2.Token|undefined) {
    this.token = token;
  }

  async intercept(request: grpcWeb.Request<REQ, RESP>,
    invoker: (request: grpcWeb.Request<REQ, RESP>) =>
    Promise<grpcWeb.UnaryResponse<REQ, RESP>>) {
    const reqMeta = request.getMetadata();
    let { token } = this;
    if (token) {
      if (token.expired()) {
        token = await token.refresh();
      }
      reqMeta.Authorization = reqMeta.Authorization ?? `${token.tokenType} ${token.accessToken}`;
    }
    const response = await invoker(request);
    return response;
  }
}

export default {};
