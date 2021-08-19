import { atom } from 'recoil';
import ClientOAuth2 from 'client-oauth2';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const oauthState = atom<ClientOAuth2.Token|undefined>({
  key: 'oauthState',
  default: undefined,
});
