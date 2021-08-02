import * as grpcWeb from 'grpc-web';

type GetAuthorization = () =>string |Promise<string>;

export class UnaryInterceptorAuth<REQ, RESP> implements grpcWeb.UnaryInterceptor<REQ, RESP> {
  getAuthorization: GetAuthorization;

  constructor(getAuthorization:GetAuthorization = () => 'some-secret-token') {
    this.getAuthorization = getAuthorization;
  }

  async intercept(request: grpcWeb.Request<REQ, RESP>,
    invoker: (request: grpcWeb.Request<REQ, RESP>) =>
    Promise<grpcWeb.UnaryResponse<REQ, RESP>>) {
    const reqMeta = request.getMetadata();
    const authorizationHandle = this.getAuthorization();
    const Authorization = authorizationHandle instanceof Promise
      ? await authorizationHandle : authorizationHandle;
    reqMeta.Authorization = reqMeta.Authorization ?? `Bearer ${Authorization}`;
    const response = await invoker(request);
    return response;
  }
}

export default {};
