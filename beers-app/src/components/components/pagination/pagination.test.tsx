import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { Pagination } from './pagination';
import { Provider } from 'react-redux';
import { server } from '../../../mocks/server';
import { store } from '../../../store/store';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pagination', () => {
  it('renders pagination component with default values', async () => {
    await waitFor(() => {
      render(
        <Provider store={store}>
          <Pagination />,
        </Provider>,
      );
    });
    await waitFor(() => {
      expect(screen.queryByText(/loading.../i)).toBeNull();
    });

    expect(screen.getByText('1 of 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });
});
