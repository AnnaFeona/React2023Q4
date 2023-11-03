import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Callback } from '../../model';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

import './search.scss';

export interface SearchProps {
  updateSearchRequest: Callback<string>;
}

export const Search: FC<SearchProps> = ({ updateSearchRequest }) => {
  const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  const [searchRequest, setSearchRequest] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getSearchValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateSearchRequest(searchRequest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRequest]);

  const getSearchValue = () => {
    const value = localStorage.getItem(searchKey) || '';
    setSearchValue(value);
    setSearchRequest(value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const dataToSave = transformInputValue(searchValue);
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, dataToSave);
    setSearchRequest(dataToSave);
  };

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value || '');
  };

  const transformInputValue = (val: string) => {
    return val
      .split(' ')
      .filter((item) => item.length > 0)
      .join(' ');
  };

  return (
    <>
      <form onSubmit={onSubmit} className="header_form">
        <input
          className="search__input"
          type="text"
          onChange={onInput}
          value={searchValue}
          placeholder="What ars you looking for?"
        />
        <Button title="Search" type="submit" />
      </form>
    </>
  );
};
