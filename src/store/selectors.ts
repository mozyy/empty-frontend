import { selector } from 'recoil';
import jwtDecode from 'jwt-decode';
import { oauthState } from './atoms';
import { JwtContent } from '../model/oauth';

export const jwtStrState = selector({
  key: 'jwtStrState',
  get: ({ get }) => {
    const oauth = get(oauthState);
    return oauth.access_token;
  },
});
export const jwtState = selector({
  key: 'jwtState',
  get: ({ get }) => {
    const oauth = get(oauthState);
    const value = jwtDecode<JwtContent>(oauth.access_token);
    return value;
  },
});
