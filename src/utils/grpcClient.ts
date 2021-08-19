import * as grpcWeb from 'grpc-web';
import { Oauth } from '../model/oauth';

/* eslint max-classes-per-file: ["error", 2] */

export class UnaryInterceptorAuth<REQ, RESP> implements grpcWeb.UnaryInterceptor<REQ, RESP> {
  oauth: Oauth;

  constructor(oauth:Oauth) {
    this.oauth = oauth;
  }

  async intercept(request: grpcWeb.Request<REQ, RESP>,
    invoker: (request: grpcWeb.Request<REQ, RESP>) =>
    Promise<grpcWeb.UnaryResponse<REQ, RESP>>) {
    const reqMeta = request.getMetadata();
    const {
      token_type: tokenType, expiry, refresh_token: refreshToken, access_token: accessToken,
    } = this.oauth;
    if (expiry < new Date()) {
      // TODO: refresh token
      console.log(refreshToken);
      return Promise.reject(Error('token expiry, will refresh token'));
    }
    reqMeta.Authorization = reqMeta.Authorization ?? `${tokenType} ${accessToken}`;
    const response = await invoker(request);
    return response;
  }
}

export default {};
