import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { Card } from './card';
import { mockBeerList } from '../../mocks/cardListMock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockBeer = mockBeerList[0];

describe('Card', () => {
  it('renders card with beer information', () => {
    render(<Card beer={mockBeer} />);

    expect(screen.getByText(`Name: ${mockBeer.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Description: ${mockBeer.description}`)).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', mockBeer.image_url);
  });

  it('navigates to details page when "Show details" button is clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Card beer={mockBeer} />);

    fireEvent.click(screen.getByText('Show details'));

    expect(mockNavigate).toHaveBeenCalledWith(`/details/${mockBeer.id}`);
  });
});
