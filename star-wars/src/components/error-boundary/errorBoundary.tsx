import { ReactNode, Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h2 className="layout-error">{`Oups!...Something went wrong :(`}</h2>
        </>
      );
    }

    return this.props.children;
  }
}
