import { JwtPayload } from 'jwt-decode';

export interface JwtContent extends JwtPayload {
  'aud': string,
  'exp': number,
  'sub': string
}

export interface Oauth {
  access_token: string,
  token_type: string,
  refresh_token: string,
  expiry: Date,
}
