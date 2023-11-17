/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useEffect, useState } from 'react';

import './pagination.scss';
import { Button } from '../button/button';
import { Select } from '../select/select';
import { useLocation, useSearchParams } from 'react-router-dom';
import { API_BASE_URL } from '../../model/constants';
import { AppContext } from '../../contexts/appContextProvider';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { decrement, increment, setItemsPerPage } from './pagination.slice';

export const Pagination: FC = () => {
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const dispatch = useAppDispatch();

  const [, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(page);
  const [totalItems, setTotalItems] = useState(1);
  const [limit, setLimit] = useState(itemsPerPage);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  const context = useContext(AppContext);

  useEffect(() => {
    getTotalItems();
    getTotalPages();
  }, []);

  useEffect(() => {
    getTotalItems();
    getTotalPages();
  }, [context.search.value]);

  useEffect(() => {
    getTotalPages();
    saveChanges();
  }, [totalItems, currentPage]);

  useEffect(() => {
    getTotalPages();
    setCurrentPage(1);
    saveChanges();
  }, [limit]);

  const toPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      context.page.setValue?.(currentPage);
      dispatch(decrement());
    }
  };
  const toNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      context.page.setValue?.(currentPage);
      dispatch(increment());
    }
    saveChanges();
  };

  const getTotalItems = () => {
    const url = context.search.value ? `?beer_name=${context.search.value}&per_page=80` : '';
    fetch(`${API_BASE_URL}${url}`)
      .then((res) => res.json())
      .then((beer) => {
        setTotalItems(beer.length);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };

  const getTotalPages = () => {
    const pages = Math.ceil(totalItems / limit);
    setTotalPages(pages);
  };

  const saveChanges = () => {
    if (location.pathname === '/') {
      if (context.search.value !== '') {
        setSearchParams({
          beer_name: context.search.value,
          page: currentPage.toString(),
          per_page: limit.toString(),
        });
      } else {
        setSearchParams({
          page: currentPage.toString(),
          per_page: limit.toString(),
        });
      }
    }
    context.limit.setValue?.(limit);
    context.page.setValue?.(currentPage);
    dispatch(setItemsPerPage(limit));
  };

  return (
    <>
      <h3>{totalItems} found</h3>
      <div className="pagination__container">
        <div className="pagination__nav">
          <Button title="Prev" onClick={toPrevPage} disabled={currentPage === 1} />
          <div className="pagination__index">
            {currentPage} of {totalPages}
          </div>
          <Button title="Next" onClick={toNextPage} disabled={currentPage === totalPages} />
        </div>
        <div className="pagination__select">
          <Select limit={limit} onSelect={setLimit} />
        </div>
      </div>
    </>
  );
};
