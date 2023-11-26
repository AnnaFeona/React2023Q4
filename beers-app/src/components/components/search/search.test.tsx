import '@testing-library/jest-dom/extend-expect';

import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './search';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('Search', () => {
  it('renders and updates search value', async () => {
    render(
      <Provider store={store}>
        <Search />,
      </Provider>,
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
  });
});
