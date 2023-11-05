import { FC } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { CardList } from '../../components/cardList/cardList.tsx';

import './main.scss';
import { Pagination } from '../../components/pagination/pagination.tsx';
import { updateSearchString } from '../../utils/index.ts';

export const Main: FC = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('beer_name') || '';
  const currentPage = searchParams.get('page') || '';
  const limitPages = searchParams.get('per_page') || '';

  const searchRequest = updateSearchString(searchValue, currentPage, limitPages);

  return (
    <>
      <div className="page">
        <Outlet />

        <div className="main-layout">
          <h1 className="logo">StarWars</h1>
          <Pagination searchValue={searchValue} key={`p${searchValue}`} />
          <CardList request={searchRequest} key={`cl${searchRequest}`} />
        </div>
      </div>
    </>
  );
};
