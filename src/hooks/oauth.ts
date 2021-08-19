import { useHistory } from 'react-router-dom';
import getOAuthUrl from '../utils/oauth';

// Can also just pass the raw `data` object in place of an argument.
// githubAuth.token.getToken(uri)
//   .then((token) => {
//     console.log(token);
//   });
// githubAuth.jwt.getToken('token.accessToken')
// .then(function (token) {
//   console.log(token) //=> { accessToken: '...', tokenType: 'bearer', ... }
// })

// const token = oAuth.createToken('access token',
// 'optional refresh token', 'optional token type', { data: 'raw user data' });

// // Set the token TTL.
// token.expiresIn(1234); // Seconds.
// token.expiresIn(new Date('2016-11-08')); // Date.

// // Refresh the users credentials and save the new access token and info.
// // token.refresh().then(storeNewToken)

// // Sign a standard HTTP request object, updating the URL with the access token
// // or adding authorization headers, depending on token type.
// token.sign({
//   method: 'get',
//   url: 'https://api.github.com/users',
// }); //= > { method, url, headers, ... }

const useOauth = (scopes?: string[]) => {
  const history = useHistory();
  const opt = scopes ? { scopes } : undefined;
  const url = getOAuthUrl(opt);
  history.push(url);
};

export default useOauth;
