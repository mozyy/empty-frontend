import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import Gallery from '../views/Gallery';

const Routers:FC = () => (
  <Switch>
    <Route path="/about">
      <div>about</div>
    </Route>
    <Route path="/">
      <Layout>
        <Gallery />
      </Layout>
    </Route>
  </Switch>
);

export default Routers;
