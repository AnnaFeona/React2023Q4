import { FC } from 'react';

// import './rootLayout.scss';
import { AppContextProvider } from '../../../contexts/appContextProvider';
import { Header } from '../../components/header/header';

export const RootLayout: FC = () => {
  return (
    <>
      <AppContextProvider>
        <Header />
        <main className="main">{/* <Outlet /> */}</main>
      </AppContextProvider>
    </>
  );
};
