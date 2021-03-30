import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const App:FC = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <Router>
      <div>
        <div className={classes.root}>
          <Link to="/">
            <Button variant="contained">home</Button>
          </Link>
          <Button variant="contained">Default</Button>
          <Link to="/about">
            <Button variant="contained" color="primary">
              about
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="contained" color="secondary">
              users
            </Button>
          </Link>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/users">
            <div>user</div>
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </div>
    </Router>

  );
};

export default App;
