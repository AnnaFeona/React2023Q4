import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import * as useGetBeerByNameQuery from './beers';
import { Provider } from 'react-redux';
import { server } from '../mocks/server';
import { store } from '../store/store';
import { Main } from '../components/screens/main/main';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('beerApi queries', () => {
  it('should fetch beer by name', async () => {
    const spyAPIcall = jest.spyOn(useGetBeerByNameQuery, 'useGetBeerByNameQuery');
    render(
      <Provider store={store}>
        <Main>
          <div>Test</div>
        </Main>
      </Provider>,
    );
    expect(spyAPIcall).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText(/coldbeer/i)).toBeInTheDocument();
    });
  });
});
