import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import Doc from '../views/Doc';
import Gallery from '../views/Gallery';
import News from '../views/News';
import NewsDetail from '../views/NewsDetail';

const Routers:FC = () => (
  <Switch>

    <Route path="/home">
      <Layout>
        <Gallery />
      </Layout>
    </Route>
    <Route path="/doc">
      <Doc />
    </Route>
    <Route path="/">
      <News />
      {/* <Layout>
        <Gallery />
      </Layout> */}
    </Route>
    <Route path="/newsDetail/:link">
      <NewsDetail />
    </Route>
  </Switch>
);

export default Routers;
