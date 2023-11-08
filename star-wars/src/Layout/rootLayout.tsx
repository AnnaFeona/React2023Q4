import { FC } from 'react';
import { Header } from '../components/header/header';
import { Outlet } from 'react-router-dom';

import './rootLayout.scss';
import { ErrorBoundary } from '../components/error-boundary/errorBoundary';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <main className="main">
          <Outlet />
        </main>
      </ErrorBoundary>
    </>
  );
};
