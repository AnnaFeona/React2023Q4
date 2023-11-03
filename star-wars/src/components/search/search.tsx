import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

import './search.scss';

export interface SearchProps {
  onSearch: Dispatch<SetStateAction<string>>;
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  const [searchValue, setSearchValue] = useState('');
  const [searchRequest, setSearchRequest] = useState('');

  useEffect(() => {
    getSearchValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onSearch(searchRequest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRequest]);

  const getSearchValue = () => {
    const value = localStorage.getItem(searchKey) || '';
    setSearchValue(value);
    setSearchRequest(value);
  };

  const saveSearchValue = (e: FormEvent) => {
    e.preventDefault();
    const dataToSave = transformInputValue(searchValue);
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, dataToSave);
    setSearchRequest(dataToSave);
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
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
      <form onSubmit={saveSearchValue} className="header_form">
        <input
          className="search__input"
          type="text"
          onChange={handleChanges}
          value={searchValue}
          placeholder="What ars you looking for?"
        />
        <Button title="Search" type="submit" />
      </form>
    </>
  );
};
