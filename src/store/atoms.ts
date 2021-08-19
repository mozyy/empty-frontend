import { atom } from 'recoil';
import { Oauth } from '../model/oauth';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const oauthState = atom<Oauth>({
  key: 'oauthState',
  default: {
    access_token: '',
    token_type: 'Bearer',
    refresh_token: '',
    expiry: new Date(),
  },
});
