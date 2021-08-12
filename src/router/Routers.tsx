import { CircularProgress } from '@material-ui/core';
import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Doc = lazy(() => import('../views/Doc'));
const Layout = lazy(() => import('../layout/Layout'));
const Gallery = lazy(() => import('../views/Gallery'));
const News = lazy(() => import('../views/News'));
const NewsDetail = lazy(() => import('../views/NewsDetail'));

const Routers:FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route path="/doc" component={Doc} />

      <Route path="/">
        <Layout>
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              <Route path="/newsDetail/:link">
                <NewsDetail />
              </Route>
              <Route path="/gallery" component={Gallery} />
              <Route path="/" component={News} />
            </Switch>
          </Suspense>
        </Layout>
        {/* <Redirect to="index" /> */}
      </Route>

    </Switch>
  </Suspense>
);

export default Routers;
