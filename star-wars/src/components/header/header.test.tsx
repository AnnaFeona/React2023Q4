import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { BrowserRouter } from 'react-router-dom';

describe('header', () => {
  it('render header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const el = screen.getByRole('banner');
    const btn = screen.getByRole('button');
    expect(el).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
