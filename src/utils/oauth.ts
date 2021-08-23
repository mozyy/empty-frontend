import ClientOAuth2 from 'client-oauth2';

export const oAuth = new ClientOAuth2({
  clientId: '1',
  clientSecret: '22222222',
  accessTokenUri: 'http://localhost:50052/i/oauth/oauth/token',
  authorizationUri: '/oauth/authorize',
  redirectUri: `${window.location.origin}/auth/github/callback`,
  scopes: ['admin'],
});

const getOAuthUrl = (options?: ClientOAuth2.Options) => oAuth.token.getUri(options);

export default getOAuthUrl;
