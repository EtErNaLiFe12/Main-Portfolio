import { Suspense, lazy, ElementType } from 'react';
import { Box } from '@mui/material';
import RouteWrapper from 'layouts/RouteWrapper';
import { Navigate, useRoutes } from 'react-router-dom';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense
      fallback={<Box sx={{ top: 0, left: 0, width: 1, zIndex: 9999, position: 'fixed' }} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const elements = useRoutes([
    {
      path: 'main-route',
      element: <RouteWrapper />,
      children: [
        { element: <Navigate to="/main-route/main" replace />, index: true },
        { path: 'main', element: <Main /> },
      ],
    },
  ]);

  return elements;
}
// Dashboard
const Main = Loadable(lazy(() => import('../pages/main-route/Main')));
