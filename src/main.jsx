import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Catalog, ErrorPage, Favorite, Home, Main } from 'pages';

import { GlobalStyles, theme } from './styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
