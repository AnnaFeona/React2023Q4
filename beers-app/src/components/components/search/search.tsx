import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Button } from '../button/button';

import style from './search.module.scss';
import { INITIAL_PAGE } from '../../../model/constants';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setPage } from '../../../store/slices/pagination.slice';
import { setSearchValue } from '../../../store/slices/search.slice';
import { transformInputValue } from '../../../utils';

export const Search: FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const dispatch = useAppDispatch();

  const [searchVal, setSearchVal] = useState(searchValue);

  const saveSearchValue = (e: FormEvent) => {
    e.preventDefault();

    const dataToSave = transformInputValue(searchVal);
    dispatch(setSearchValue(dataToSave.join(' ')));
    dispatch(setPage(INITIAL_PAGE));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchVal(value || '');
  };

  return (
    <>
      <form onSubmit={saveSearchValue} className={style.header_form}>
        <input
          className={style.search__input}
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
