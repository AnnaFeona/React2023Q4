import '@testing-library/jest-dom/extend-expect';
// import { render, screen, waitFor } from '@testing-library/react';
// import * as useGetBeerByNameQuery from './beers';
// import App from 'next/app';
// import { Provider } from 'react-redux';
import { server } from '../mocks/server';
// import { wrapper } from '../store/store';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('beerApi queries', () => {
  it('should fetch beer by name', async () => {
    // const spyAPIcall = jest.spyOn(useGetBeerByNameQuery, 'useGetBeerByNameQuery');
    // const { store } = wrapper.useWrappedStore();
    // render(
    //   <Provider store={}>
    //     <App />
    //   </Provider>,
    // );
    // expect(spyAPIcall).toHaveBeenCalled();
    // await waitFor(() => {
    //   expect(screen.getByText(/coldbeer/i)).toBeInTheDocument();
    // });
  });
});
