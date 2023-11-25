import { ChangeEvent, FC, FormEvent } from 'react';
import { Button } from '../button/button';

import style from './search.module.scss';
// import { useSearchParams } from 'next/navigation';
// import { setPage } from '../../../../../star-wars/src/store/pagination.slice';
// import { setSearchValue } from '../../../../../star-wars/src/store/search.slice';
// import { STORAGE_KEY_PREFFIX, INITIAL_PAGE } from '../../../model/constants';
// import { useAppDispatch } from '../../../store/hooks';
// import { transformInputValue } from '../../../utils';
// import { log } from 'console';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { transformInputValue } from '../../utils';
// import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { setPage } from '../../store/pagination.slice';
// import { setSearchValue } from '../../store/search.slice';

export const Search: FC = () => {
  // const searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;
  // const searchValue = useAppSelector((state) => state.search.searchValue);
  // const dispatch = useAppDispatch();

  // const [, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // const [searchVal, setSearchVal] = useState(searchValue);

  // const getSearchValue = () => {
  //   const value = localStorage.getItem(searchKey) || '';
  //   setSearchVal(value);

  //   if (location.pathname === '/' && value !== '') {
  //     setSearchParams({ beer_name: value });
  //   }
  //   dispatch(setSearchValue(value));
  // };

  const saveSearchValue = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);

    // const dataToSave = transformInputValue(searchVal);
    // localStorage.setItem(searchKey, dataToSave.join(' '));
    // setSearchParams({ beer_name: dataToSave.join('_') });
    // dispatch(setSearchValue(dataToSave.join(' ')));
    // dispatch(setPage(INITIAL_PAGE));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);

    // setSearchVal(value || '');
  };

  // useState(() => {
  //   getSearchValue();
  // });

  return (
    <>
      <form onSubmit={saveSearchValue} className={style.header_form}>
        <input
          className={style.search__input}
          type="text"
          onChange={handleChanges}
          // value={searchVal}
          placeholder="What ars you looking for?"
        />
        <Button
          title="Search"
          type="submit"
          // disabled={!searchVal}
        />
      </form>
    </>
  );
};
