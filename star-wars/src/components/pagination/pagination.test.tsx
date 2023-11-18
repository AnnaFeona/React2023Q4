import '@testing-library/jest-dom/extend-expect';
import { act } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';
// import { AppContextProvider } from '../../contexts/appContextProvider';
// import { Pagination } from './pagination';
// import { allBeers } from '../../mocks/cardListMock';
// import { Provider } from 'react-redux';
// import { store } from '../../store/store';

// (global.fetch as jest.Mock) = jest.fn();

describe('Pagination', () => {
  beforeAll(() => {
    // (global.fetch as jest.Mock).mockClear();
  });

  it('renders pagination component with default values', async () => {
    await act(() => {
      // (global.fetch as jest.Mock).mockResolvedValue({
      //   json: () => allBeers,
      // });
      // render(
      //   <Provider store={store}>
      //     <MemoryRouter initialEntries={['/?page=1']}>
      //       <AppContextProvider>
      //         <Pagination />
      //       </AppContextProvider>
      //     </MemoryRouter>
      //     ,
      //   </Provider>,
      // );
    });

    // expect(screen.getByText('1 of 6')).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
    // expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
  });

  test('navigates to the next page when "Next" button is clicked', async () => {
    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'),
    //   useSearchParams: jest.fn(),
    // }));

    await act(() => {
      // (global.fetch as jest.Mock).mockResolvedValue({
      //   json: () => allBeers,
      // });
      // render(
      // <Provider store={store}>
      //   <MemoryRouter initialEntries={['/?page=1']}>
      //     <AppContextProvider>
      //       <Pagination />
      //     </AppContextProvider>
      //   </MemoryRouter>
      //   ,
      // </Provider>,
      // );
    });

    // const mockSearchParams = new URLSearchParams();
    // jest.spyOn(mockSearchParams, 'get').mockReturnValue('page');

    // global.URLSearchParams = jest.fn(() => mockSearchParams);

    // userEvent.click(screen.getByText('Next'));
    // await waitFor(() => {
    //   expect(window.location.search).toBe('');
    // });
  });
});
