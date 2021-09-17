import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { useHistory, useLocation } from 'react-router-dom';
import { stringify } from 'qs';
import useRouterParams from '../../hooks/routerParams';
import { oauthState } from '../../store/selectors/oauth';

const OauthAuthorize: React.FC = () => {
  const query = useRouterParams();
  const history = useHistory();
  const location = useLocation();
  console.log(query.forEach(console.log), location);
  const [oauth, setOauth] = useRecoilState(oauthState);
  // React.useEffect(() => {
  //   const loginURI = `/login?${stringify({ redirectURI: query.get('redirectURI') })}`;
  //   if (oauth) {
  //     if (oauth.expired()) {
  //       oauth.refresh().then((res) => {
  //         setOauth(res);
  //       }, () => {
  //         history.replace(loginURI);
  //       });
  //     }
  //   } else {
  //     history.replace(loginURI);
  //   }
  // }, [oauth, history, setOauth, query]);
  const redirectURI = query.get('redirectURI') || window.location.origin;
  const loginURI = `/login?${stringify({ redirectURI })}`;
  if (oauth) {
    if (oauth.expired()) {
      oauth.refresh().then((res) => {
        setOauth(res);
      }, () => {
        history.replace(loginURI);
      });
      return null;
    }
  } else {
    history.replace(loginURI);
    return null;
  }

  return (
    <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
      <Button onClick={() => {
        const callbackURI = new URL(redirectURI);
        callbackURI.searchParams.set('code', oauth?.accessToken);
        history.replace(`${redirectURI}`);
      }}
      >
        auth
      </Button>
    </Box>
  );
};

export default OauthAuthorize;
