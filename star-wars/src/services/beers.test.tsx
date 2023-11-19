import '@testing-library/jest-dom/extend-expect';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { API_BASE_URL } from '../model/constants';
import { mockBeerList } from '../mocks/cardListMock';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import App from '../App/App';

const server = setupServer(
  http.get(`${API_BASE_URL}`, () => {
    return HttpResponse.json(mockBeerList);
  }),

  http.get(`${API_BASE_URL}/:id`, ({ params }) => {
    const { id } = params;
    const result = mockBeerList.filter((item) => item.id.toString() === id);
    return HttpResponse.json(result);
  }),
);

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
