import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor, render } from '@testing-library/react';
import { Details } from './details';
import { mockBeerList } from '../../../mocks/cardList.mock';

import { server } from '../../../mocks/server';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { store } from '../../../store/store';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouterPush = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: mockRouterPush,
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Details', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    render(
      <Provider store={store}>
        <Details id={1} />
      </Provider>,
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await waitFor(() => {});
  });

  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const mockBeer = mockBeerList[0];
    render(
      <Provider store={store}>
        <Details id={4} />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getByText(RegExp(mockBeer.name, 'i'))).toBeInTheDocument();
      expect(screen.getByText(mockBeer.description)).toBeInTheDocument();
      expect(screen.getByAltText('')).toHaveAttribute('src', mockBeer.image_url);
    });
  });
});
