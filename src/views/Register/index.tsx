import * as React from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useInputField } from '../../hooks/inputField';
import { UserClient } from '../../proto/user/UserServiceClientPb';
import { RegisterRequest } from '../../proto/user/user_pb';
import { useGrpcRequest } from '../../hooks/grpcRequest';
import { useClientUser } from '../../hooks/clients';

const Register: React.FC = () => {
  const [state, setState] = useInputField({
    mobile: '',
    password: '',
  });
  const navigate = useNavigate();
  const { data, run } = useGrpcRequest(useClientUser('register'), { manual: true });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(123, state);
    const req = new RegisterRequest();
    req.setMobile(state.mobile);
    req.setPassword(state.password);
    run(req)
      .then(() => {
        navigate(-1);
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
