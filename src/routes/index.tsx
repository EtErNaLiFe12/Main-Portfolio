import { Suspense, lazy, ElementType } from 'react';
import { Box, Typography } from '@mui/material';
import RouteWrapper from 'layouts/RouteWrapper';
import { Navigate, useRoutes } from 'react-router-dom';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense
      fallback={
        <Box sx={{ zIndex: 9999, textAlign: 'center' }}>
          <Typography sx={{ fontSize: 40 }}>Loading</Typography>
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <RouteWrapper />,
      children: [
        { element: <Navigate to="/mainboard/main" replace />, index: true },
        { path: 'mainboard/main', element: <Main /> },
      ],
    },
  ]);
}
// Dashboard
const Main = Loadable(lazy(() => import('../pages/mainboard/Main')));
