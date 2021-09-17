import { atom, selector } from 'recoil';
import ClientOAuth2 from 'client-oauth2';
import { oauthAtomState } from '../atoms/oauth';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const oauthState = selector<ClientOAuth2.Token|undefined>({
  key: 'oauth/oauthState',
  get: ({ get }) => {
    const oauth = get(oauthAtomState);
    if (oauth && oauth.expired()) {
      return undefined;
    }
    return oauth;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    set(oauthAtomState, newValue);
  },
});
