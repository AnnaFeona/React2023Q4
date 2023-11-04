import { FC } from 'react';
import { Header } from '../components/header/header';
import { Outlet } from 'react-router-dom';

import './rootLayout.scss';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
