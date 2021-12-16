/* eslint-disable max-len */
import { CircularProgress } from '@material-ui/core';
import React, {
  Component, FC, lazy, Suspense,
} from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import grpcWeb from 'grpc-web';
import { stringify } from 'qs';
import Layout from '../layout/Layout';

const Doc = lazy(() => import('../views/Doc'));
const Login = lazy(() => import('../views/Login'));
const Register = lazy(() => import('../views/Register'));
const OauthAuthorize = lazy(() => import('../views/OauthAuthorize'));
const Gallery = lazy(() => import('../views/Gallery'));
const News = lazy(() => import('../views/News'));
const IndexTest = lazy(() => import('../views/News/indexTest'));
const NewsDetail = lazy(() => import('../views/NewsDetail'));

const ESuspense:FC = ({ children }) => <Suspense fallback={<CircularProgress />}>{children}</Suspense>;

const ErrorBoundary:FC<{ error:any, onError:(error:any)=>void }> = (props) => {
  const { error, onError, children } = props;
  const location = useLocation();
  const navigate = useNavigate();
  console.log(123123123, 'page error: ', error, children);
  if (error?.code === grpcWeb.StatusCode.UNAUTHENTICATED) {
    onError({ error: null });
    const redirectURI = `/oauth/authorize?${stringify({ redirectURI: location.pathname + location.search })}`;
    navigate(redirectURI);
    return null;
  }

  return error ? (
    <div style={{ color: 'red' }}>{error.message}</div>
  ) : (
    children as any
  );
};

// TODO: function components
class ErrorBoundaryClass extends Component<{}, { error: any }> {
  constructor(props:{}) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return <ErrorBoundary error={error} onError={this.setState}>{children}</ErrorBoundary>;
  }
}

const Routers:FC = () => (
  <ESuspense>
    <ErrorBoundaryClass>
      <Routes>
        <Route path="/doc" element={<ESuspense><Doc /></ESuspense>} />
        <Route path="/login" element={<ESuspense><Login /></ESuspense>} />
        <Route path="/register" element={<ESuspense><Register /></ESuspense>} />
        <Route path="/oauth/authorize" element={<ESuspense><OauthAuthorize /></ESuspense>} />

        <Route path="/" element={<Layout />}>
          <Route path="/newsDetail/:link" element={<ESuspense><NewsDetail /></ESuspense>} />
          <Route path="/gallery" element={<ESuspense><Gallery /></ESuspense>} />
          <Route index element={(<ESuspense><News /></ESuspense>)} />
        </Route>
      </Routes>
    </ErrorBoundaryClass>
  </ESuspense>
);

export default Routers;
