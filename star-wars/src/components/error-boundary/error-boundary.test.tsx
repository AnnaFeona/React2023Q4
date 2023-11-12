/* eslint-disable no-console */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBoundary } from './errorBoundary';

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
    const { getByText } = render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>,
    );

    expect(getByText('Oups!...Something went wrong :(')).toBeInTheDocument();
  });
});
