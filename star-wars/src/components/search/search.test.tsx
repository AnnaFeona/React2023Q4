import '@testing-library/jest-dom/extend-expect';

import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './search';
import { MemoryRouter } from 'react-router-dom';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

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
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
        ,
      </Provider>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
  });

  it('Check that the component retrieves the value from the local storage upon mounting', () => {
    window.localStorage.setItem(searchKey, 'help');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
        ,
      </Provider>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('help');
  });

  it('Verify that clicking the Search button saves the entered value to the local storage', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
        ,
      </Provider>,
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    fireEvent.submit(screen.getByRole('button', { name: /search/i }));
    expect(window.localStorage.setItem).toHaveBeenCalledWith(searchKey, 'test');
  });
});
