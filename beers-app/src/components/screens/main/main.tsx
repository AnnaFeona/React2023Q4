import { FC } from 'react';

import style from './main.module.scss';
import { CardList } from '../../components/cardList/cardList';
import { Pagination } from '../../components/pagination/pagination';
// import { GetServerSideProps } from 'next';
// import { Beer } from '../../../model';
// import { useGetBeerByNameQuery } from '../../../services/beers';
// import { wrapper } from '../../../store/store';

interface MainProps {
  children: JSX.Element;
}

// export const getServerSideProps: GetServerSideProps<Beer[]> = async () => {
// }

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
