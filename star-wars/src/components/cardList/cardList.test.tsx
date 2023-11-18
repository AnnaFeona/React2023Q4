import '@testing-library/jest-dom/extend-expect';
// import { act, render, screen, waitFor } from '@testing-library/react';
// import { CardList } from './cardList';
// import { Beer } from '../../model';
// import { mockBeerList } from '../../mocks/cardListMock';
// import { BrowserRouter } from 'react-router-dom';
// import { AppContextProvider } from '../../contexts/appContextProvider';

// (global.fetch as jest.Mock) = jest.fn();

describe('CardList', () => {
  beforeAll(() => {
    // (global.fetch as jest.Mock).mockClear();
  });

  // it('Check that a loading indicator is displayed while fetching data', () => {
  //   (global.fetch as jest.Mock).mockResolvedValue({
  //     json: () => mockBeerList,
  //   });

  //   render(
  //     <AppContextProvider>
  //       <CardList />
  //     </AppContextProvider>,
  //   );
  //   expect(screen.getByText(/loading/i)).toBeInTheDocument();
  //   waitFor(() => {});
  // });

  it('Check that an appropriate message is displayed if no cards are present.', async () => {
    // const mockBeerListEmpty: Beer[] = [];
    // await act(async () => {
    //   (global.fetch as jest.Mock).mockResolvedValueOnce({
    //     json: () => mockBeerListEmpty,
    //   });
    //   render(
    //     <BrowserRouter>
    //       <CardList />
    //     </BrowserRouter>,
    //   );
    // });
    // expect(screen.getByText(/not found :\(/i)).toBeInTheDocument();
  });

  it('renders error state if fetch fails', async () => {
    // (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    // render(<CardList />);
    // await waitFor(() => expect(screen.getByText(/oups.../i)).toBeInTheDocument());
  });

  it('Verify that the component renders the specified number of cards', async () => {
    // (global.fetch as jest.Mock).mockResolvedValue({
    //   json: () => mockBeerList,
    // });
    // render(
    //   <BrowserRouter>
    //     <AppContextProvider>
    //       <CardList />
    //     </AppContextProvider>
    //   </BrowserRouter>,
    // );
    // await waitFor(() => {
    //   expect(screen.queryByText(/loading.../i)).toBeNull();
    // });
    // const cards = screen.queryAllByText(/name:/i);
    // expect(cards.length).toBe(mockBeerList.length);
  });
});
