import ClientOAuth2 from 'client-oauth2';

export const oAuth = new ClientOAuth2({
  clientId: '1',
  accessTokenUri: 'http://localhost:50052/i/oauth/oauth/token',
  authorizationUri: '/oauth/authorize',
  scopes: ['base'],
});

export const getOAuthUri = (options?: ClientOAuth2.Options) => oAuth.token.getUri(options);

export const refreshOauth = () => {};
