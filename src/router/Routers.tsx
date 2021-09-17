import { CircularProgress } from '@material-ui/core';
import React, {
  Component, FC, lazy, Suspense,
} from 'react';
import {
  Route, RouteComponentProps, Switch, withRouter,
} from 'react-router-dom';
import grpcWeb from 'grpc-web';
import { stringify } from 'qs';

const Doc = lazy(() => import('../views/Doc'));
const Login = lazy(() => import('../views/Login'));
const Register = lazy(() => import('../views/Register'));
const OauthAuthorize = lazy(() => import('../views/OauthAuthorize'));
const Layout = lazy(() => import('../layout/Layout'));
const Gallery = lazy(() => import('../views/Gallery'));
const News = lazy(() => import('../views/News'));
const IndexTest = lazy(() => import('../views/News/indexTest'));
const NewsDetail = lazy(() => import('../views/NewsDetail'));

// TODO: function components
class ErrorBoundary extends Component<RouteComponentProps, { error: any }> {
  constructor(props:RouteComponentProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, history, location } = this.props;
    console.log(123123123, error);
    if (error?.code === grpcWeb.StatusCode.UNAUTHENTICATED) {
      this.setState({ error: null });
      const redirectURI = `/oauth/authorize?${stringify({ redirectURI: location.pathname + location.search })}`;
      history.replace(redirectURI);
      return null;
    }

    return error ? (
      <div style={{ color: 'red' }}>{error.message}</div>
    ) : (
      children
    );
  }
}
const ErrorBoundaryWithRouter = withRouter(ErrorBoundary);

const Routers:FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <ErrorBoundaryWithRouter>
      <Switch>
        <Route path="/doc" component={Doc} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/oauth/authorize" component={OauthAuthorize} />

        <Route path="/">
          <Layout>
            <Suspense fallback={<CircularProgress />}>
              <Switch>
                <Route path="/newsDetail/:link">
                  <NewsDetail />
                </Route>
                <Route path="/gallery" component={Gallery} />
                {/* <Route path="/" component={News} /> */}
                <Suspense fallback={<div>loading......</div>}>
                  {/* <Route path="/" component={IndexTest} /> */}
                  <Route path="/" component={News} />
                </Suspense>
              </Switch>
            </Suspense>
          </Layout>
          {/* <Redirect to="index" /> */}
        </Route>
      </Switch>
    </ErrorBoundaryWithRouter>
  </Suspense>
);

export default Routers;
