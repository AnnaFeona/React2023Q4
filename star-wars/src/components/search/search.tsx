import { ChangeEvent, FC, FormEvent, useContext, useEffect, useState } from 'react';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

import './search.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { transformInputValue } from '../../utils';
import { AppContext } from '../../contexts/appContextProvider';

export const Search: FC = () => {
  const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const context = useContext(AppContext);
  const [searchValue, setSearchValue] = useState(context.searchValue);

  useEffect(() => {
    getSearchValue();
  }, []);

  const getSearchValue = () => {
    const value = localStorage.getItem(searchKey) || '';
    setSearchValue(value);
    context.setSearchValue?.(value);

    if (location.pathname === '/' && value !== '') {
      setSearchParams({ beer_name: value });
    }
  };

  const saveSearchValue = (e: FormEvent) => {
    e.preventDefault();

    const dataToSave = transformInputValue(searchValue);
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, dataToSave.join(' '));
    setSearchParams({ beer_name: dataToSave.join('_') });
    context.setSearchValue?.(searchValue);
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value || '');
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
        <Button title="Search" type="submit" disabled={!searchValue} />
      </form>
    </>
  );
};
