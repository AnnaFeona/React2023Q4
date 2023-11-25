import { FC } from 'react';
import { Header } from '../../components/header/header';
import { Main } from '../main/main';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
