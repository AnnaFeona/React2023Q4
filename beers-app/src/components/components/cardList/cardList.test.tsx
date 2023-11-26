import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { CardList } from './cardList';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { server } from '../../../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CardList', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>,
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('loader')).toBeNull());
  });
});
