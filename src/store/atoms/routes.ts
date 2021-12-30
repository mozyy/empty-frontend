import { RouteObject } from 'react-router-dom';
import { atom } from 'recoil';

export interface RouteItem extends RouteObject {
  name: string
  children?: RouteItem[];
}

export const routesAtomState = atom<RouteItem[]>({
  key: 'routes/routesAtomState',
  default: []
  // const newOauth = oAuth.createToken(resp.getAccessToken(),
  //   resp.getRefreshToken(), resp.getTokenType(), { });
  // console.log(22222, newOauth);
  // newOauth.expiresIn(resp.getExpiresSeconds());
  ,
});
