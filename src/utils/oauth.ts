import ClientOAuth2 from 'client-oauth2';

const oAuth = new ClientOAuth2({
  clientId: '1',
  // clientSecret: '123',
  // accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: '/oauth/authorize',
  redirectUri: `${window.location.origin}/auth/github/callback`,
  scopes: ['notifications', 'gist'],
});

const getOAuthUrl = (options?: ClientOAuth2.Options) => oAuth.token.getUri(options);

export default getOAuthUrl;
