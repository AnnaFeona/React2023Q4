/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';

import './pagination.scss';
import { Button } from '../button/button';
import { Select } from '../select/select';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrement, increment } from '../../store/pagination.slice';
import { useGetAllBeersQuery } from '../../services/beers';

export const Pagination: FC = () => {
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const searchValue = useAppSelector((state) => state.pagination.searchValue);
  const dispatch = useAppDispatch();

  const { data = [] } = useGetAllBeersQuery(searchValue);

  const [, setSearchParams] = useSearchParams();
  const location = useLocation();

  // const context = useContext(AppContext);

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
    return Math.ceil(data.length / itemsPerPage);
  };

  const saveChanges = () => {
    if (location.pathname === '/') {
      if (searchValue !== '') {
        setSearchParams({
          beer_name: searchValue,
          page: page.toString(),
          per_page: itemsPerPage.toString(),
        });
      } else {
        setSearchParams({
          page: page.toString(),
          per_page: itemsPerPage.toString(),
        });
      }
    }
  };

  return (
    <>
      <h3>{data.length} found</h3>
      <div className="pagination__container">
        <div className="pagination__nav">
          <Button title="Prev" onClick={toPrevPage} disabled={page === 1} />
          <div className="pagination__index">
            {page} of {getTotalPages()}
          </div>
          <Button title="Next" onClick={toNextPage} disabled={page === getTotalPages()} />
        </div>
        <div className="pagination__select">
          <Select />
        </div>
      </div>
    </>
  );
};
