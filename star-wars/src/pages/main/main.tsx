import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { CardList } from '../../components/cardList/cardList.tsx';

import './main.scss';
import { Pagination } from '../../components/pagination/pagination.tsx';

export const Main: FC = () => {
  return (
    <>
      <div className="page">
        <Outlet />

        <div className="main-layout">
          <h1 className="logo">ColdBeer</h1>
          <Pagination />
          <CardList />
        </div>
      </div>
    </>
  );
};
