/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';

import './pagination.scss';
import { Button } from '../button/button';
import { Select } from '../select/select';
import { useLocation, useSearchParams } from 'react-router-dom';
import { API_BASE_URL } from '../../model/constants';

interface PaginationProps {
  searchValue: string;
}

export const Pagination: FC<PaginationProps> = ({ searchValue }) => {
  const [, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  useEffect(() => {
    getTotalItems();
    getTotalPages();
  }, []);

  useEffect(() => {
    getTotalItems();
    getTotalPages();
  }, [searchValue]);

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
    }
  };
  const toNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getTotalItems = () => {
    const url = searchValue ? `?beer_name=${searchValue}&per_page=80` : '';
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
      if (searchValue !== '') {
        console.log(searchValue);
        setSearchParams({
          beer_name: searchValue,
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
