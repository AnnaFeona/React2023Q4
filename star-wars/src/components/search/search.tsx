import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { INITIAL_PAGE, STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

import './search.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { transformInputValue } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPage, setSearchValue } from '../../store/pagination.slice';

export const Search: FC = () => {
  const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;
  const searchValue = useAppSelector((state) => state.pagination.searchValue);
  const dispatch = useAppDispatch();

  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchVal, setSearchVal] = useState(searchValue);

  // useEffect(() => {
  //   getSearchValue();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const getSearchValue = () => {
    const value = localStorage.getItem(searchKey) || '';
    setSearchVal(value);

    if (location.pathname === '/' && value !== '') {
      setSearchParams({ beer_name: value });
    }
    dispatch(setSearchValue(value));
  };

  const saveSearchValue = (e: FormEvent) => {
    e.preventDefault();

    const dataToSave = transformInputValue(searchVal);
    localStorage.setItem(searchKey, dataToSave.join(' '));
    setSearchParams({ beer_name: dataToSave.join('_') });
    dispatch(setSearchValue(dataToSave.join(' ')));
    dispatch(setPage(INITIAL_PAGE));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchVal(value || '');
  };

  useState(() => {
    getSearchValue();
  });

  return (
    <>
      <form onSubmit={saveSearchValue} className="header_form">
        <input
          className="search__input"
          type="text"
          onChange={handleChanges}
          value={searchVal}
          placeholder="What ars you looking for?"
        />
        <Button title="Search" type="submit" disabled={!searchVal} />
      </form>
    </>
  );
};
