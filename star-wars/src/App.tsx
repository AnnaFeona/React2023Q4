// eslint-disable-next-line no-unused-vars
import { FC } from 'react';

import { Main } from './pages/main/main';
import { Details } from './pages/details/details';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.scss';
import { RootLayout } from './Layout/rootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="details:id" element={<Details />} />
    </Route>,
  ),
);

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
