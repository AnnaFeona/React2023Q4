import { FC } from 'react';
import { Header } from '../components/header/header';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
