import { atom } from 'recoil';
import ClientOAuth2 from 'client-oauth2';
import { oAuth } from '../../utils/oauth';
import { getStorage } from '../../utils/storage';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const tokenSto = getStorage('OAUTH_TOKEN');
let newOauth:ClientOAuth2.Token|undefined;
if (tokenSto) {
  newOauth = oAuth.createToken(tokenSto.accessToken,
    tokenSto.accessToken, tokenSto.accessToken, { });
  newOauth.expiresIn(new Date(tokenSto.expires));
}

export const oauthAtomState = atom<ClientOAuth2.Token|undefined>({
  key: 'oauth/oauthAtomState',
  default: newOauth
  // const newOauth = oAuth.createToken(resp.getAccessToken(),
  //   resp.getRefreshToken(), resp.getTokenType(), { });
  // console.log(22222, newOauth);
  // newOauth.expiresIn(resp.getExpiresSeconds());
  ,
});
