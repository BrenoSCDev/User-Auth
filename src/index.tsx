import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

import { AuthProvider } from './Contexts/Auth/Auth';

import { GlobalStyle } from './Styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </AuthProvider>
  </React.StrictMode>
)
