import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Route, RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from '../layout/rootLayout';
import { Details } from '../pages/details/details';
import { Main } from '../pages/main/main';
import { NotFoundPage } from '../pages/notFound/notFoundPage';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { server } from '../mocks/server';

const routesConfig = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="" element={<Main />}>
      <Route path="details/:id" element={<Details />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  it('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
    const memoryRouter = createMemoryRouter(routesConfig, {
      initialEntries: ['/badroute'],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={memoryRouter} />
      </Provider>,
    );

    expect(screen.getByText(/404/)).toBeInTheDocument();
  });
});
