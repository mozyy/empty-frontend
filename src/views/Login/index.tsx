import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';

const Login: React.FC = () => {
  const [s, set] = React.useState();
  console.log(s, set);
  return (
    <ImageList
      sx={{ width: 500, padding: 1, margin: '0 auto' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      1
    </ImageList>
  );
};

export default Login;
