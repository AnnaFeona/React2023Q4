import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Route, RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from '../layout/rootLayout';
import { Details } from '../pages/details/details';
import { Main } from '../pages/main/main';
import { NotFoundPage } from '../pages/notFound/notFoundPage';
import App from './App';

const routesConfig = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="" element={<Main />}>
      <Route path="details/:id" element={<Details />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);

describe('App', () => {
  it('render App', () => {
    render(<App />);
    // const memoryRouter = createMemoryRouter(routesConfig, {
    //   initialEntries: ['/'],
    // });

    // render(<RouterProvider router={memoryRouter} />);

    // screen.debug();
    // expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('not-found page when incorrect path', () => {
    const memoryRouter = createMemoryRouter(routesConfig, {
      initialEntries: ['/badroute'],
    });
    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByText(/404/)).toBeInTheDocument();
  });
});
