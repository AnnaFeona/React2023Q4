import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './errorBoundary';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

class ErrorThrowingComponent extends React.Component {
  componentDidMount() {
    throw new Error('Test error');
  }

  render() {
    return null;
  }
}

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <div>Child Component</div>
        </ErrorBoundary>
        ,
      </Provider>,
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <ErrorThrowingComponent />
        </ErrorBoundary>
        ,
      </Provider>,
    );

    expect(screen.getByText('Oups!...Something went wrong :(')).toBeInTheDocument();
  });
});
