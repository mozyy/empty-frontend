import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/Layout';
import Doc from '../views/Doc';
import Gallery from '../views/Gallery';
import News from '../views/News';
import NewsDetail from '../views/NewsDetail';

const Routers:FC = () => (
  <Switch>

    <Route path="/doc">
      <Doc />
    </Route>

    <Route path="/">
      <Layout>
        <Switch>
          <Route path="/newsDetail/:link">
            <NewsDetail />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <News />
          </Route>
        </Switch>
        {/* <Redirect to="index" /> */}
      </Layout>
    </Route>

  </Switch>
);

export default Routers;
