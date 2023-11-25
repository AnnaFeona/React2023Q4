import { FC } from 'react';

import style from './main.module.scss';
import { CardList } from '../../layout/cardList/cardList';
import { Pagination } from '../../layout/pagination/pagination';

interface MainProps {
  children: JSX.Element;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className={style.page}>
        {children}

        <div className={style.layout}>
          <h1 className={style.logo}>ColdBeer</h1>
          <Pagination />
          <CardList />
        </div>
      </div>
    </>
  );
};
