import { atom, selector } from 'recoil';
import ClientOAuth2 from 'client-oauth2';
import { oauthAtomState } from '../atoms/oauth';
import { removeStorage, setStorage } from '../../utils/storage';
import { oAuth } from '../../utils/oauth';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const oauthState = selector<ClientOAuth2.Token | undefined>({
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
    if (newValue) {
      const tokenValue = ((newValue as any));
      const tokenStr = JSON.stringify({
        accessToken: tokenValue.accessToken,
        refreshToken: tokenValue.refreshToken,
        tokenType: tokenValue.tokenType,
        expires: tokenValue.expires,
      });
      const newToken = JSON.parse(tokenStr);
      const newOauth = oAuth.createToken(newToken.accessToken,
        newToken.accessToken, newToken.accessToken, { });
      newOauth.expiresIn(new Date(newToken.expires));
      console.log(89898, tokenStr, newToken, newOauth);
      setStorage('OAUTH_TOKEN', tokenStr);
    } else {
      removeStorage('OAUTH_TOKEN');
    }

    set(oauthAtomState, newValue);
  },
});
