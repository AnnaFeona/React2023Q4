import '@testing-library/jest-dom/extend-expect';

import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { Search } from './search';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';

const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

let storage: Record<string, string> = {};

const localStorageMock = {
  getItem: jest.fn((key) => storage[key] || null),
  setItem: jest.fn((key, value) => {
    storage[key] = value.toString();
  }),
  removeItem: jest.fn((key) => {
    delete storage[key];
  }),
  clear: jest.fn(() => {
    storage = {};
  }),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Search', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders and updates search value', async () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
  });

  it('loads search value from localStorage on mount', () => {
    window.localStorage.setItem(searchKey, 'help');

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('help');
  });

  it('updates localstorage by submission', () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>,
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    fireEvent.submit(screen.getByRole('button', { name: /search/i }));
    expect(window.localStorage.setItem).toHaveBeenCalledWith(searchKey, 'test');
  });
});
