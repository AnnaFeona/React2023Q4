/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';

import style from './pagination.module.scss';
import { Button } from '../button/button';
// import { useSearchParams } from 'next/navigation';
import { useGetBeerByNameQuery } from '../../../services/beers';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { decrement, increment } from '../../../store/slices/pagination.slice';
import { Select } from '../select/select';

export const Pagination: FC = () => {
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const dispatch = useAppDispatch();

  const { data = [] } = useGetBeerByNameQuery({ name: searchValue, perPage: 50 });

  // const [, setSearchParams] = useSearchParams();
  // const location = useLocation();

  useEffect(() => {
    getTotalPages();
  }, []);

  useEffect(() => {
    getTotalPages();
  }, [searchValue]);

  useEffect(() => {
    getTotalPages();
    saveChanges();
  }, [page, itemsPerPage]);

  useEffect(() => {
    getTotalPages();
    saveChanges();
  }, [itemsPerPage]);

  const toPrevPage = () => {
    if (page > 1) {
      dispatch(decrement());
    }
  };
  const toNextPage = () => {
    if (page < getTotalPages()) {
      dispatch(increment());
    }
  };

  const getTotalPages = () => {
    const pages = Math.ceil(data.length / itemsPerPage);
    return pages > 1 ? pages : 1;
  };

  const saveChanges = () => {
    // if (location.pathname === '/') {
    //   if (searchValue !== '') {
    //     setSearchParams({
    //       beer_name: searchValue,
    //       page: page.toString(),
    //       per_page: itemsPerPage.toString(),
    //     });
    //   } else {
    //     setSearchParams({
    //       page: page.toString(),
    //       per_page: itemsPerPage.toString(),
    //     });
    //   }
    // }
  };

  return (
    <>
      <h3>{data.length} found</h3>
      <div className={style.pagination__container}>
        <div className={style.pagination__nav}>
          <Button title="Prev" onClick={toPrevPage} disabled={page === 1} />
          <div className={style.pagination__index}>
            {page} of {getTotalPages()}
          </div>
          <Button title="Next" onClick={toNextPage} disabled={page === getTotalPages()} />
        </div>
        <div className={style.pagination__select}>
          <Select />
        </div>
      </div>
    </>
  );
};
