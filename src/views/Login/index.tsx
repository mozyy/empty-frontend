import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useSetRecoilState } from 'recoil';
import { useInputField } from '../../hooks/inputField';
import ELink from '../../components/ELink';
import { oAuth } from '../../utils/oauth';
import { oauthState } from '../../store/atoms';

const Login: React.FC = () => {
  const [state, setState] = useInputField({
    mobile: '',
    password: '',
  });
  const setOauth = useSetRecoilState(oauthState);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(123, state);
    oAuth.owner.getToken(state.mobile, state.password).then((token) => {
      console.log(2222, token);
      setOauth(token);
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
