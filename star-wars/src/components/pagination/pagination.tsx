/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';

import './pagination.scss';
import { Button } from '../button/button';
import { Select } from '../select/select';
import { useNavigate } from 'react-router-dom';
import { updateSearchString } from '../../utils';
import { API_BASE_URL } from '../../model/constants';

interface PaginationProps {
  searchValue: string;
}

export const Pagination: FC<PaginationProps> = ({ searchValue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

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
    navigate(updateSearchString(searchValue, currentPage, limit));
  }, [totalItems, currentPage]);

  useEffect(() => {
    getTotalPages();
    setCurrentPage(1);
    navigate(updateSearchString(searchValue, 1, limit));
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
    fetch(`${API_BASE_URL}?beer_name=${searchValue}&per_page=80`)
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

  return (
    <>
      <h3>{totalItems} found</h3>
      <div className="pagination__container">
        <div className="pagination__nav">
          <Button title="Prev" onClick={toPrevPage} />
          <div>
            {currentPage} of {totalPages}
          </div>
          <Button title="Next" onClick={toNextPage} />
        </div>
        <div className="pagination__select">
          <Select limit={limit} onSelect={setLimit} />
        </div>
      </div>
    </>
  );
};
