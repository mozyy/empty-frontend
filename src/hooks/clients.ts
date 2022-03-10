import { useEffect, useMemo } from 'react';
import { atom, useRecoilValue } from 'recoil';
import * as grpcWeb from 'grpc-web';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import { Message } from 'google-protobuf';
import { SourcesClient } from '../proto/manage/SourcesServiceClientPb';
import { NewsClient } from '../proto/news/NewsServiceClientPb';
import { UserClient } from '../proto/user/UserServiceClientPb';
import { clientStateNews, clientStateSources, clientStateUser } from '../store/atoms/clients';

type C<Source> =
Pick<Source, { [K in keyof Source]:
  Source[K] extends (arg1:any, arg2:any)=>Promise<any> ? K : never }[keyof Source]>;

type P<Method> = Parameters<Method extends (...args:any) => any ? Method:never>;

type Methods<Client> = <K extends keyof C<Client>>(method: K) =>(
  request: P<C<Client>[K]>[0],
  metadata?: P<C<Client>[K]>[1]) =>
Promise<Parameters<P<C<Client>[K]>[2]>[1]>;

type GetSwrKeys = <CC extends new (...args: any) => any,
MM extends keyof C<InstanceType<CC>>,
R extends P<C<InstanceType<CC>>[MM]>[0]>(Client: CC,
  method: MM,
  request: P<C<InstanceType<CC>>[MM]>[0],
  metadata?: P<C<InstanceType<CC>>[MM]>[1]) =>
  [CC, MM, P<C<InstanceType<CC>>[MM]>[0], P<C<InstanceType<CC>>[MM]>[1]|undefined];

export const getSwrKeys:GetSwrKeys = (...args) => args as any;

export const useClientNews:Methods<NewsClient> = (method) => {
  const client = useRecoilValue(clientStateNews);
  return useMemo(() => (client[method] as any).bind(client), [client, method]);
};
export const useClientNews2:Methods<NewsClient> = (method) => {
  const client = useRecoilValue(clientStateNews);
  return useMemo(() => (client[method] as any).bind(client), [client, method]);
};

export const useClientUser:Methods<UserClient> = (method) => {
  const client = useRecoilValue(clientStateUser);
  return useMemo(() => (client[method] as any).bind(client), [client, method]);
};
export const useClientSources:Methods<SourcesClient> = (method) => {
  const client = useRecoilValue(clientStateSources);
  return useMemo(() => (client[method] as any).bind(client), [client, method]);
};
