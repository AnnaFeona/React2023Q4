import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Route, RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from '../layout/rootLayout';
import { Details } from '../pages/details/details';
import { Main } from '../pages/main/main';
import { NotFoundPage } from '../pages/notFound/notFoundPage';

const routesConfig = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="" element={<Main />}>
      <Route path="details/:id" element={<Details />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);

describe('App', () => {
  it('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
    const memoryRouter = createMemoryRouter(routesConfig, {
      initialEntries: ['/badroute'],
    });
    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByText(/404/)).toBeInTheDocument();
  });
});
