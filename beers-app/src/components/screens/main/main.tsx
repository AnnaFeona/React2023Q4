import { FC } from 'react';

import style from './main.module.scss';
import { CardList } from '../../components/cardList/cardList';
import { Pagination } from '../../components/pagination/pagination';

interface MainProps {
  children: JSX.Element;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <main className={style.page}>
        {children}

        <div className={style.container}>
          <h1 className={style.logo}>ColdBeer</h1>
          <Pagination />
          <CardList />
        </div>
      </main>
    </>
  );
};
