import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { CardList } from './cardList';
import { mockBeerList } from '../../mocks/cardListMock';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../../contexts/appContextProvider';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CardList', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    render(
      <Provider store={store}>
        <AppContextProvider>
          <CardList />
        </AppContextProvider>
        ,
      </Provider>,
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('loader')).toBeNull());
  });

  it('Verify that the component renders the specified number of cards', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardList />
        </BrowserRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.queryByText(/loading.../i)).toBeNull();
    });
    const cards = screen.queryAllByText(/name:/i);
    expect(cards.length).toBe(mockBeerList.length);
  });
});
