import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RootLayout } from './rootLayout';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeIten: jest.fn(),
  clear: jest.fn(),
};

describe('Layout', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });
  it('localStorage', () => {});

  it('render root', () => {
    render(
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>,
    );

    const el = screen.getByRole('main');
    expect(el).toBeInTheDocument();
  });
});
