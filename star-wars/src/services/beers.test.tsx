import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import App from '../App/App';
import { server } from '../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('beerApi queries', () => {
  it('should fetch beer by name and per_page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/coldbeer/i)).toBeInTheDocument();
    });
  });
});
