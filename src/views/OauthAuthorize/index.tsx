import * as React from 'react';
import { Box } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import useRouterParams from '../../hooks/routerParams';
import { oauthState } from '../../store/atoms';

const OauthAuthorize: React.FC = () => {
  const params = useRouterParams();
  console.log(params.forEach(console.log));
  const history = useHistory();
  const [oauth, setOauth] = useRecoilState(oauthState);
  React.useEffect(() => {
    if (oauth) {
      if (oauth.expired()) {
        oauth.refresh().then((res) => {
          setOauth(res);
        }, () => {
          history.push('/login');
        });
      } else {
        console.log(1111, oauth);
      }
    } else {
      history.push('/login');
    }
  }, [oauth, history, setOauth]);

  return (
    <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
      loading
    </Box>
  );
};

export default OauthAuthorize;
