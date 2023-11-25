import { FC } from 'react';
import { Header } from '../../layout/header/header';
// import style from './layout.module.scss';
import { Main } from '../main/main';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <main className={style.main}> */}
      <Main>{children}</Main>
      {/* </main> */}
    </>
  );
};
