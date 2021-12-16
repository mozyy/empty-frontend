import { stringify } from 'qs';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { oauthState } from '../store/selectors/oauth';
import { getOAuthUri } from '../utils/oauth';

export const useOauth = (scopes?: string[]) => {
  const navigate = useNavigate();
  const opt = scopes ? { scopes } : undefined;
  const url = getOAuthUri(opt);
  navigate(url);
};

export const useOauthRefresh = () => {
  const [oauth, setOauth] = useRecoilState(oauthState);
  const navigate = useNavigate();
  return useCallback(() => {
    const redireURI = `/login?${stringify({ redirectURI: window.location.pathname + window.location.search })}`;
    if (!oauth) {
      navigate(redireURI, { replace: true });
      return Promise.reject(Error('no token'));
    }
    return oauth.refresh().then((newOauth) => {
      setOauth(newOauth);
      return newOauth;
    }, (err) => {
      setOauth(undefined);
      navigate(redireURI, { replace: true });
      return Promise.reject(Error(`token refresh error: ${err}`));
    });
  }, [navigate, oauth, setOauth]);
};

export const useIsLogined = () => {
  const oauth = useRecoilValue(oauthState);
  return !!oauth;
};
