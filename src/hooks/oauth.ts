import { stringify } from 'qs';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { oauthState } from '../store/selectors/oauth';
import { getOAuthUri } from '../utils/oauth';

export const useOauth = (scopes?: string[]) => {
  const history = useHistory();
  const opt = scopes ? { scopes } : undefined;
  const url = getOAuthUri(opt);
  history.push(url);
};

export const useOauthRefresh = () => {
  const [oauth, setOauth] = useRecoilState(oauthState);
  const history = useHistory();
  return useCallback(() => {
    const redireURI = `/login?${stringify({ redirectURI: window.location.pathname + window.location.search })}`;
    if (!oauth) {
      history.push(redireURI);
      return Promise.reject(Error('no token'));
    }
    return oauth.refresh().then((newOauth) => {
      setOauth(newOauth);
      return newOauth;
    }, (err) => {
      setOauth(undefined);
      history.push(redireURI);
      return Promise.reject(Error(`token refresh error: ${err}`));
    });
  }, [oauth, history, setOauth]);
};
