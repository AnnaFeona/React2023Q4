import '@testing-library/jest-dom/extend-expect';
// import { screen, waitFor } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { Details } from './details';
// import { mockBeerList } from '../../../mocks/cardListMock';

import { server } from '../../../mocks/server';
// import { Provider } from 'react-redux';
// import { store } from '../../../../../star-wars/src/store/store';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Details', () => {
  it('Check that a loading indicator is displayed while fetching data', async () => {
    // render(
    //   <Provider store={store}>
    //     <MemoryRouter initialEntries={['/details/1']}>
    //       <Details />
    //     </MemoryRouter>
    //     ,
    //   </Provider>,
    // );
    // expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    // await waitFor(() => {});
  });

  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    // render(
    //   <Provider store={store}>
    //     <MemoryRouter initialEntries={['/details/4']}>
    //       <Details />
    //     </MemoryRouter>
    //     ,
    //   </Provider>,
    // );
    // await waitFor(() => {
    //   expect(screen.getByText(mockBeer.name)).toBeInTheDocument();
    //   expect(screen.getByText(mockBeer.description)).toBeInTheDocument();
    //   expect(screen.getByAltText('')).toHaveAttribute('src', mockBeer.image_url);
    // });
  });
});
