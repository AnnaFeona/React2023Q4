import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Details } from './details';
import { mockBeerList } from '../../mocks/cardListMock';

(global.fetch as jest.Mock) = jest.fn();

describe('Details', () => {
  beforeAll(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('Check that a loading indicator is displayed while fetching data', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => [mockBeerList[0]],
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Details />
      </MemoryRouter>,
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {});
  });

  test('Make sure the detailed card component correctly displays the detailed card data', async () => {
    const mockBeer = mockBeerList[0];

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => [mockBeer],
    });

    render(
      <MemoryRouter initialEntries={['/details/4']}>
        <Details />
      </MemoryRouter>,
    );

    // Wait for details to load
    await waitFor(() => {
      expect(screen.getByText(mockBeer.name)).toBeInTheDocument();
      expect(screen.getByText(mockBeer.description)).toBeInTheDocument();
      expect(screen.getByAltText('')).toHaveAttribute('src', mockBeer.image_url);
    });
  });
});
