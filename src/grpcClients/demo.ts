import useSWR from 'swr';
import { NewsClient } from '../proto/news/NewsServiceClientPb';

interface Param {

}

export const gen = <T extends new (hostname: string,
  credentials?: null | { [index: string]: string; },
  options?: null | { [index: string]: any; }) => any>(Client:T, hostname = '', credentials?: null | { [index: string]: string; },
    options?: null | { [index: string]: any; }) => new Client(hostname,
    credentials, { ...options });
