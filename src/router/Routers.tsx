import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';

const Routers:FC = () => (
  <Switch>
    <Route path="/">
      <Layout />
    </Route>
    <Route path="/tools">
      <Layout />
    </Route>
  </Switch>
);
export default Routers;
