import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

import './search.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Search: FC = () => {
  const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  const [, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getSearchValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const getSearchValue = () => {
    const value = localStorage.getItem(searchKey) || '';
    setSearchParams({ people: value });
    // navigate(`/?people=${value}`);
    setSearchValue(value);
  };

  const saveSearchValue = (e: FormEvent) => {
    e.preventDefault();
    const dataToSave = transformInputValue(searchValue);
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, dataToSave);
    // setSearchParams({search: dataToSave});
    navigate(`/?people=${dataToSave}`, { replace: true });
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
