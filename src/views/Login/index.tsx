import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { useInputField } from '../../hooks/inputField';
import ELink from '../../components/ELink';
import { oauthState } from '../../store/atoms';
import useGrpcClient from '../../hooks/grpcClient';
import { UserClient } from '../../proto/user/UserServiceClientPb';
import { LoginRequest } from '../../proto/user/user_pb';
import { oAuth } from '../../utils/oauth';

const Login: React.FC = () => {
  const [state, setState] = useInputField({
    mobile: '',
    password: '',
  });
  const userClient = useGrpcClient(UserClient);
  const setOauth = useSetRecoilState(oauthState);
  const history = useHistory();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(123, state);
    // oAuth.owner.getToken(state.mobile, state.password).then((token) => {
    //   console.log(2222, token);
    //   setOauth(token);
    // });
    const req = new LoginRequest();
    req.setMobile(state.mobile);
    req.setPassword(state.password);
    userClient.login(req, { Authorization: 'Bearer some-secret-token' }).then((res) => {
      console.log(123, res);
      const oauth = oAuth.createToken(res.getAccessToken(),
        res.getRefreshToken(), res.getTokenType(), { });

      setOauth(oauth);
      history.replace('/');
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
      <Button sx={{ flex: 1, marginTop: 1 }} variant="contained" type="submit">登录</Button>
      <ELink to="/register">
        <Button sx={{ flex: 1, marginTop: 1 }}>注册</Button>
      </ELink>
    </Box>
  );
};

export default Login;
