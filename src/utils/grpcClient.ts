import ClientOAuth2 from 'client-oauth2';
import { Message } from 'google-protobuf';
import * as grpcWeb from 'grpc-web';

export class UnaryInterceptorAuth<REQ extends Message = Message, RESP extends Message = Message>
implements grpcWeb.UnaryInterceptor<REQ, RESP> {
  // eslint-disable-next-line class-methods-use-this
  async intercept(request:grpcWeb.Request<REQ, RESP>,
    invoker: (request: grpcWeb.Request<REQ, RESP>) =>
    Promise<grpcWeb.UnaryResponse<REQ, RESP>>):Promise<grpcWeb.UnaryResponse<REQ, RESP>> {
    const response = await invoker(request).catch(async (e: grpcWeb.Error) => {
      console.error('grpc error:', (request.getMethodDescriptor() as any)?.name, e, request.getRequestMessage().toObject());
      return Promise.reject(e);
    });
    console.log('%c[rpc]: ', 'color: red', (request.getMethodDescriptor() as any)?.name,
      request.getRequestMessage().toObject(), response.getResponseMessage().toObject());
    return response;
  }
}

export default {};
