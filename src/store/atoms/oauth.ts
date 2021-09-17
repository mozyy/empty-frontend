import { atom } from 'recoil';
import ClientOAuth2 from 'client-oauth2';
import { oAuth } from '../../utils/oauth';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const oauthAtomState = atom<ClientOAuth2.Token|undefined>({
  key: 'oauth/oauthAtomState',
  default: undefined
  // const newOauth = oAuth.createToken(resp.getAccessToken(),
  //   resp.getRefreshToken(), resp.getTokenType(), { });
  // console.log(22222, newOauth);
  // newOauth.expiresIn(resp.getExpiresSeconds());
  ,
});
