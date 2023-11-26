import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './card';
import { mockBeerList } from '../../../mocks/cardList.mock';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouterPush = jest.fn();
const mockBeer = mockBeerList[0];

(useRouter as jest.Mock).mockReturnValue({
  push: mockRouterPush,
});

describe('Card', () => {
  it('Ensure that the card component renders the relevant card data', () => {
    render(<Card beer={mockBeer} />);

    expect(screen.getByText(`Name: ${mockBeer.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Description: ${mockBeer.description}`)).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', mockBeer.image_url);
  });

  it('Validate that clicking on a card opens a detailed card component', () => {
    render(<Card beer={mockBeer} />);

    fireEvent.click(screen.getByText(/Show details/i));
    expect(mockRouterPush).toHaveBeenCalledWith('/details/4');
  });
});
