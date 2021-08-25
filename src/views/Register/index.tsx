import * as React from 'react';
import { Box, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useInputField } from '../../hooks/inputField';
import useGrpcClient from '../../hooks/grpcClient';
import { UserClient } from '../../proto/user/UserServiceClientPb';
import { RegisterRequest } from '../../proto/user/user_pb';

const Register: React.FC = () => {
  const [state, setState] = useInputField({
    mobile: '',
    password: '',
  });
  const history = useHistory();
  const userClient = useGrpcClient(UserClient);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(123, state);
    const req = new RegisterRequest();
    req.setMobile(state.mobile);
    req.setPassword(state.password);
    userClient.register(req, { Authorization: 'Bearer some-secret-token' })
      .then(() => {
        history.goBack();
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
      <Button sx={{ flex: 1, marginTop: 1 }} variant="contained" type="submit">注册</Button>
    </Box>
  );
};

export default Register;
