/* eslint-disable max-len */
import { LinearProgress } from '@mui/material';
import React, {
  Component, FC, lazy, Suspense, useEffect,
} from 'react';
import {
  Route, Routes, useLocation, useNavigate, useRoutes,
} from 'react-router-dom';
import grpcWeb from 'grpc-web';
import { stringify } from 'qs';
import { useRecoilState, useRecoilValue } from 'recoil';
import Layout from '../layout/Layout';
import { routesAtomState } from '../store/atoms/routes';

const Doc = lazy(() => import('../views/Doc'));
const Login = lazy(() => import('../views/Login'));
const Register = lazy(() => import('../views/Register'));
const OauthAuthorize = lazy(() => import('../views/OauthAuthorize'));
const Gallery = lazy(() => import('../views/Gallery'));
const News = lazy(() => import('../views/News'));
const IndexTest = lazy(() => import('../views/News/indexTest'));
const NewsDetail = lazy(() => import('../views/NewsDetail'));

const ESuspense:FC = ({ children }) => <Suspense fallback={<LinearProgress />}>{children}</Suspense>;

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
    const pushState = Math.random();
    const handler = (event: any) => {
      if (event.state === pushState) {
        console.log(
          `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
        );
        window.history.replaceState('', '', '/');
        window.removeEventListener('popstate', handler);
      }
    };
    if (window.history.length === 1) {
      window.history.pushState(pushState, 'pushStatttt');
      window.addEventListener('popstate', handler);
    }
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);
  useEffect(() => {
    console.log(6666, loca);
  }, [loca]);
  const [routesState, setRoutesState] = useRecoilState(routesAtomState);
  const element = useRoutes(routesState);
  useEffect(() => {
    if (routesState.length === 0) {
      setRoutesState([
        {
          path: '/doc',
          name: '文档',
          element: <ESuspense><Doc /></ESuspense>,
        },
        {
          path: '/login',
          name: '文档',
          element: <ESuspense><Login /></ESuspense>,
        },
        {
          path: '/register',
          name: '文档',
          element: <ESuspense><Register /></ESuspense>,
        },
        {
          path: '/oauth/authorize',
          name: '文档',
          element: <ESuspense><OauthAuthorize /></ESuspense>,
        },
        {
          path: '/',
          name: '首页',
          element: <ESuspense><Layout /></ESuspense>,
          children: [
            {
              path: '/newsDetail/:link',
              name: '新闻详情',
              element: <ESuspense><NewsDetail /></ESuspense>,
            },
            {
              path: '/gallery',
              name: '图库',
              element: <ESuspense><Gallery /></ESuspense>,
            },
            { index: true, name: '新闻', element: <ESuspense><News /></ESuspense> },
          ],
        },
      ]);
    }
  }, [routesState.length, setRoutesState]);
  return element;
};

export default Routers;
