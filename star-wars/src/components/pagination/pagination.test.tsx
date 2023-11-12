import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AppContextProvider } from '../../contexts/appContextProvider';
import { Pagination } from './pagination';
import { allBeers } from '../../mocks/cardListMock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(() => [{}, jest.fn()]),
  useLocation: jest.fn(() => ({ pathname: '/' })),
}));

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

    expect(screen.getByText('1 of 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });

  test('navigates to the next page when "Next" button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['page=1&per_page=5']}>
        <AppContextProvider>
          <Pagination />
        </AppContextProvider>
      </MemoryRouter>,
    );

    userEvent.click(screen.getByText('Next'));
  });

  test('changes the limit when selecting a different value in the "Per Page" dropdown', async () => {
    // render(
    //   <MemoryRouter>
    //     <AppContextProvider>
    //       <Pagination />
    //     </AppContextProvider>
    //   </MemoryRouter>
    // );
    // fireEvent.change(screen.getByTestId('pagination-select'), { target: { value: '20' } });
    // // Check that the limit value is updated
    // await waitFor(() => expect(screen.getByText('Per Page: 20')).toBeInTheDocument());
  });
});
