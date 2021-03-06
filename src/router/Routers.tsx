/* eslint-disable max-len */
import { LinearProgress } from '@mui/material';
import React, {
  Component, FC, lazy, Suspense, SuspenseProps, useEffect,
} from 'react';
import {
  Route, Routes, useLocation, useNavigate, useRoutes,
} from 'react-router-dom';
import grpcWeb from 'grpc-web';
import { stringify } from 'qs';
import { useRecoilState, useRecoilValue } from 'recoil';
import Layout from '../layout/Layout';
import { routesAtomState } from '../store/atoms/routes';
// import Test from '../views/Test';
// import Test1 from '../views/Test2';

const Doc = lazy(() => import('../views/Doc'));
const Test = lazy(() => import('../views/Test'));
const Test1 = lazy(() => import('../views/Test2'));
const Login = lazy(() => import('../views/Login'));
const Register = lazy(() => import('../views/Register'));
const OauthAuthorize = lazy(() => import('../views/OauthAuthorize'));
const Gallery = lazy(() => import('../views/Gallery'));
const News = lazy(() => import('../views/News'));
const IndexTest = lazy(() => import('../views/News/indexTest'));
const NewsDetail = lazy(() => import('../views/NewsDetail'));
const Sources = lazy(() => import('../views/manage/Sources'));

const ESusp:FC<Partial<SuspenseProps>> = ({ ...props }) => <Suspense fallback={<LinearProgress />} {...props} />;

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

const Routers:FC = () => {
  const loca = useLocation();
  useEffect(() => {
    // console.log(6666, loca);
  }, [loca]);
  const [routesState, setRoutesState] = useRecoilState(routesAtomState);
  const element = useRoutes(routesState);
  useEffect(() => {
    if (routesState.length === 0) {
      setRoutesState([
        // {
        //   path: '/test',
        //   name: 'test',
        //   element: <ESusp><Test /></ESusp>,
        // },
        // {
        //   path: '/test1',
        //   name: 'test1',
        //   element: <ESusp><Test1 /></ESusp>,
        // },
        {
          path: '/doc',
          name: '??????',
          element: <ESusp><Doc /></ESusp>,
        },
        {
          path: '/login',
          name: '??????',
          element: <ESusp><Login /></ESusp>,
        },
        {
          path: '/register',
          name: '??????',
          element: <ESusp><Register /></ESusp>,
        },
        {
          path: '/oauth/authorize',
          name: '??????',
          element: <ESusp><OauthAuthorize /></ESusp>,
        },
        {
          path: '/',
          name: '??????',
          element: <ESusp><Layout /></ESusp>,
          children: [
            {
              path: '/newsDetail/:link',
              name: '????????????',
              element: <ESusp><NewsDetail /></ESusp>,
            },
            {
              path: '/gallery',
              name: '??????',
              element: <ESusp><Gallery /></ESusp>,
            },
            {
              path: '/test',
              name: 'test',
              element: <ESusp><Test /></ESusp>,
            },
            {
              path: '/test1',
              name: 'test1',
              element: <ESusp><Test1 /></ESusp>,
            },
            { index: true, name: '??????', element: <ESusp><News /></ESusp> },
          ],
        },
        {
          path: '/manage',
          name: '??????',
          element: <ESusp><Layout /></ESusp>,
          children: [
            {
              path: '/manage/sources',
              name: '??????',
              element: <ESusp><Sources /></ESusp>,
            },
            {
              path: 'gallery',
              name: '??????',
              element: <ESusp><Gallery /></ESusp>,
            },
            { index: true, name: '??????', element: <ESusp><News /></ESusp> },
          ],
        },
      ]);
    }
  }, [routesState.length, setRoutesState]);
  return element;
};

export default Routers;
