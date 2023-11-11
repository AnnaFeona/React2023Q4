import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Search } from './search';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeIten: jest.fn(),
  clear: jest.fn(),
};

// const handleChanges = jest.fn(() => {});

describe('Search', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  it('render search', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    // screen.debug();
    const el = screen.getByRole('textbox');
    expect(el).toBeInTheDocument();
  });

  it('localStorage', () => {
    const { unmount } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    const text = 'test';
    const inp = screen.getByRole('textbox');
    // const btn = screen.getByRole('button');
    // const form = screen.queryByRole<HTMLFormElement>('form');

    unmount();

    userEvent.type(inp, text);
    // expect(handleChanges).toHaveBeenCalledTimes(text.length);
    // expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});
