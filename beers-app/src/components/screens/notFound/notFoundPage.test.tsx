import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NotFoundPage } from './notFoundPage';

describe('not-found page', () => {
  it('render 404', () => {
    render(<NotFoundPage />);

    const el = screen.getByText(/404/);
    expect(el).toBeInTheDocument();
  });
});
