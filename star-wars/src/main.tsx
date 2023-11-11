import ReactDOM from 'react-dom/client';
import App from './App/App.tsx';
// import { ErrorBoundary } from './components/error-boundary/errorBoundary.tsx';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <ErrorBoundary>
  <App />,
  // </ErrorBoundary>,
);
