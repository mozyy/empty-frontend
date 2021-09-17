import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {
  useRecoilCallback, useRecoilState, useRecoilTransaction_UNSTABLE,
  useRecoilValue, useSetRecoilState,
} from 'recoil';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useInputField } from '../../hooks/inputField';
import ELink from '../../components/ELink';
import { UserClient } from '../../proto/user/UserServiceClientPb';
// import { LoginRequest } from '../../proto/user/user_pb';
// import { oAuth } from '../../utils/oauth';
import useRouterParams from '../../hooks/routerParams';
import { userClientState } from '../../store/atoms/clients';
import { LoginRequest } from '../../proto/user/user_pb';
import { oAuth } from '../../utils/oauth';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { useClientUser } from '../../hooks/clients';
import { oauthState } from '../../store/selectors/oauth';

const Login: React.FC = () => {
  const [state, setState] = useInputField({
    mobile: '18381335182',
    password: 'smqy123',
  });
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition({
    timeoutMs: 3000,
  });
  console.log(22222222, isPending);
  const [oauth, setOauth] = useRecoilState(oauthState);
  const history = useHistory();
  const query = useRouterParams();
  console.log(123333, query.get('redirectURI'));
  const { run } = useGrpcRequest(useClientUser('login'), { manual: true });

  if (oauth) {
    history.replace(query.get('redirectURI') || '/');
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(123, state);
    const request = new LoginRequest();
    request.setMobile(state.mobile);
    request.setPassword(state.password);
    const resp = await run(request);
    const newOauth = oAuth.createToken(resp.getAccessToken(),
      resp.getRefreshToken(), resp.getTokenType(), { });
    console.log(22222, newOauth);
    newOauth.expiresIn(resp.getExpiresSeconds());
    setOauth(newOauth);
  };
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
      <Box>
        <TextField
          label="mobile"
          value={state.mobile}
          onChange={setState('mobile')}
        />
        <TextField
          label="password"
          value={state.password}
          onChange={setState('password')}
        />
      </Box>
      <Button
        disabled={isPending}
        sx={{ flex: 1, marginTop: 1 }}
        variant="contained"
        type="submit"
      >
        登录
      </Button>
      <ELink to="/register">
        <Button sx={{ flex: 1, marginTop: 1 }}>注册</Button>
      </ELink>
    </Box>
  );
};

export default Login;
