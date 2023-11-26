import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('header', () => {
  it('render header', () => {
    render(
      <Provider store={store}>
        <Header />,
      </Provider>,
    );
    const el = screen.getByRole('banner');
    const btn = screen.getByRole('button');
    expect(el).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
