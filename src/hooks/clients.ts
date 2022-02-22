import { useEffect, useMemo } from 'react';
import { atom, useRecoilValue } from 'recoil';
import { SourcesClient } from '../proto/manage/SourcesServiceClientPb';
import { NewsClient } from '../proto/news/NewsServiceClientPb';
import { UserClient } from '../proto/user/UserServiceClientPb';
import { clientStateNews, clientStateSources, clientStateUser } from '../store/atoms/clients';

export const useClientNews = <K extends keyof NewsClient>(method: K):NewsClient[K] => {
  const client = useRecoilValue(clientStateNews);
  return useMemo(() => (client[method] as Function).bind(client),
    [client, method]);
};

export const useClientUser = <K extends keyof UserClient>(method: K):UserClient[K] => {
  const client = useRecoilValue(clientStateUser);
  return useMemo(() => (client[method] as Function).bind(client),
    [client, method]);
};

export const useClientSources = <K extends keyof SourcesClient>(method: K):SourcesClient[K] => {
  const client = useRecoilValue(clientStateSources);
  return useMemo(() => (client[method] as Function).bind(client),
    [client, method]);
};
