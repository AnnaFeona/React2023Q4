import '@testing-library/jest-dom/extend-expect';
import { render, screen, act, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AppContextProvider } from '../../contexts/appContextProvider';
import { Pagination } from './pagination';
import { allBeers } from '../../mocks/cardListMock';

(global.fetch as jest.Mock) = jest.fn();

describe('Pagination', () => {
  beforeAll(() => {});

  it('renders pagination component with default values', async () => {
    await act(() => {
      (global.fetch as jest.Mock).mockResolvedValue({
        json: () => allBeers,
      });

      render(
        <MemoryRouter>
          <AppContextProvider>
            <Pagination />
          </AppContextProvider>
        </MemoryRouter>,
      );
    });

    expect(screen.getByText('1 of 6')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
  });

  test('navigates to the next page when "Next" button is clicked', async () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useSearchParams: jest.fn(),
    }));

    await act(() => {
      (global.fetch as jest.Mock).mockResolvedValue({
        json: () => allBeers,
      });

      render(
        <MemoryRouter initialEntries={['/?page=1']}>
          <AppContextProvider>
            <Pagination />
          </AppContextProvider>
        </MemoryRouter>,
      );
    });

    const mockSearchParams = new URLSearchParams();
    jest.spyOn(mockSearchParams, 'get').mockReturnValue('page');

    global.URLSearchParams = jest.fn(() => mockSearchParams);

    userEvent.click(screen.getByText('Next'));
    await waitFor(() => {
      expect(window.location.search).toBe('');
    });
  });
});
