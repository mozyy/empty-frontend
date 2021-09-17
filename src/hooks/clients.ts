import { useEffect, useMemo } from 'react';
import { atom, useRecoilValue } from 'recoil';
import { NewsClient } from '../proto/news/NewsServiceClientPb';
import { UserClient } from '../proto/user/UserServiceClientPb';
import { newsClientState, userClientState } from '../store/atoms/clients';

export const useClientNews = <K extends keyof NewsClient>(method: K):NewsClient[K] => {
  const client = useRecoilValue(newsClientState);
  return useMemo(() => (client[method] as Function).bind(client),
    [client, method]);
};

export const useClientUser = <K extends keyof UserClient>(method: K):UserClient[K] => {
  const client = useRecoilValue(userClientState);
  return useMemo(() => (client[method] as Function).bind(client),
    [client, method]);
};
