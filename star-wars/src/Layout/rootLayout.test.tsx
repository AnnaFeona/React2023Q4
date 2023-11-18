import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RootLayout } from './rootLayout';
import { Provider } from 'react-redux';
import { store } from '../store/store';

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
      <Provider store={store}>
        <BrowserRouter>
          <RootLayout />
        </BrowserRouter>
        ,
      </Provider>,
    );

    const el = screen.getByRole('main');
    expect(el).toBeInTheDocument();
  });
});
