import { FC } from 'react';

import { Main } from '../pages/main/main';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.scss';
import { NotFoundPage } from '../pages/notFound/notFoundPage';
import { RootLayout } from '../layout/rootLayout';
import { Details } from '../pages/details/details';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Main />}>
        <Route path="details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
