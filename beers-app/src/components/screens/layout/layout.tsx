import { FC } from 'react';
import { Header } from '../../components/header/header';
import { Main } from '../main/main';
import { getBeerByName } from '../../../pages/api/beers.api';

interface LayoutProps {
  children: JSX.Element;
}

export const getServerSideProps = async () => {
  const beers = await getBeerByName();

  return { props: { beers } };
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
