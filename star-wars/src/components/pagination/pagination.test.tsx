import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../../contexts/appContextProvider';
import { Pagination } from './pagination';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pagination', () => {
  it('renders pagination component with default values', async () => {
    await waitFor(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <AppContextProvider>
              <Pagination />
            </AppContextProvider>
          </BrowserRouter>
          ,
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

  it('navigates to the next page when "Next" button is clicked', async () => {
    await waitFor(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <AppContextProvider>
              <Pagination />
            </AppContextProvider>
          </BrowserRouter>
          ,
        </Provider>,
      );
    });

    await waitFor(() => {
      expect(screen.queryByText(/loading.../i)).toBeNull();
    });

    const mockSearchParams = new URLSearchParams();
    jest.spyOn(mockSearchParams, 'get').mockReturnValue('page');

    global.URLSearchParams = jest.fn(() => mockSearchParams);

    userEvent.click(screen.getByText('Next'));
    await waitFor(() => {
      expect(window.location.search).toBe('?page=1&per_page=10');
    });
  });
});
