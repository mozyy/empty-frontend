import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useInputField } from '../../hooks/inputField';
import ELink from '../../components/ELink';
import { oauthState } from '../../store/atoms';
import useGrpcClient from '../../hooks/grpcClient';
import { UserClient } from '../../proto/user/UserServiceClientPb';
import { LoginRequest } from '../../proto/user/user_pb';
import { oAuth } from '../../utils/oauth';
import useRouterParams from '../../hooks/routerParams';

const Login: React.FC = () => {
  const [state, setState] = useInputField({
    mobile: '18381335182',
    password: 'smqy123',
  });
  const userClient = useGrpcClient(UserClient);
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition({
    timeoutMs: 3000,
  });
  console.log(222, startTransition, isPending);
  const [oauth, setOauth] = useRecoilState(oauthState);
  const history = useHistory();
  const query = useRouterParams();
  console.log(123333, query.get('redirectURI'));
  useEffect(() => {
    if (oauth) {
      history.replace('/');
    }
  }, [history, oauth]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(123, state);
    // oAuth.owner.getToken(state.mobile, state.password).then((token) => {
    //   console.log(2222, token);
    //   setOauth(token);
    // });
    startTransition(() => {
      const req = new LoginRequest();
      req.setMobile(state.mobile.trim());
      req.setPassword(state.password.trim());
      userClient.login(req, { Authorization: 'Bearer some-secret-token' }).then((res) => {
        console.log(123, res);
        const newOauth = oAuth.createToken(res.getAccessToken(),
          res.getRefreshToken(), res.getTokenType(), { });
        console.log(22222, newOauth);
        newOauth.expiresIn(res.getExpiresSeconds());
        setOauth(newOauth);
        history.replace(query.get('redirectURI') || '/');
      });
    });
    e.preventDefault();
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
