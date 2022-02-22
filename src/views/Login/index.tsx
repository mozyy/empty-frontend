import * as React from 'react';
import {
  Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import {
  useRecoilCallback, useRecoilState, useRecoilTransaction_UNSTABLE,
  useRecoilValue, useSetRecoilState,
} from 'recoil';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { setFieldAction, useInputField } from '../../hooks/inputField';
import ELink from '../../components/ELink';
import { UserClient } from '../../proto/user/UserServiceClientPb';
// import { LoginRequest } from '../../proto/user/user_pb';
// import { oAuth } from '../../utils/oauth';
import { clientStateUser } from '../../store/atoms/clients';
import { LoginRequest } from '../../proto/user/user_pb';
import { oAuth } from '../../utils/oauth';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { useClientUser } from '../../hooks/clients';
import { oauthState } from '../../store/selectors/oauth';
import { getStorage, removeStorage, setStorage } from '../../utils/storage';

const Login: React.FC = () => {
  const [state, setState, dispatch] = useInputField({
    mobile: '',
    password: '',
  });
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition({
    timeoutMs: 3000,
  });
  console.log(22222222, isPending);
  const [oauth, setOauth] = useRecoilState(oauthState);
  const navigate = useNavigate();
  const [query] = useSearchParams();
  console.log(123333, query.get('redirectURI'));
  const { run } = useGrpcRequest(useClientUser('login'), { manual: true });

  const [remember, setRemember] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    const rememberPassword = getStorage('REMEMBER_PASSWORD');
    console.log(2222222222, rememberPassword);
    if (rememberPassword) {
      setRemember(true);
      dispatch(setFieldAction({ ...rememberPassword }));
    }
  }, [dispatch]);

  if (oauth) {
    navigate(query.get('redirectURI') || '/', { replace: true });
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
    if (remember) {
      setStorage('REMEMBER_PASSWORD', state);
    } else {
      removeStorage('REMEMBER_PASSWORD');
    }
    setOauth(newOauth);
  };
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        m: 5, padding: 1, display: 'flex', flexDirection: 'column',
      }}
    >
      <Box>
        <TextField
          label="mobile"
          value={state.mobile}
          onChange={setState('mobile')}
          sx={{ mt: 2, width: '100%' }}
        />
        <TextField
          label="password"
          value={state.password}
          onChange={setState('password')}
          type={showPassword ? 'text' : 'password'}
          sx={{ mt: 1, width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((s) => !s)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>),
          }}
        />
      </Box>
      <FormControlLabel control={<Checkbox checked={remember} onChange={(e, c) => setRemember(c)} />} label="记住密码" />
      <Button
        disabled={isPending}
        sx={{ flex: 1, marginTop: 2 }}
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
