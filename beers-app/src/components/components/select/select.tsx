import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import style from './select.module.scss';
import { INITIAL_PAGE } from '../../../model/constants';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setItemsPerPage, setPage } from '../../../store/pagination.slice';

interface SelectProps {
  limit?: number;
  onSelect?: Dispatch<SetStateAction<number>>;
}

export const Select: FC<SelectProps> = () => {
  const itemsPerPpage = useAppSelector((state) => state.pagination.itemsPerPage);
  const dispatch = useAppDispatch();
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
    dispatch(setPage(INITIAL_PAGE));
  };

  return (
    <>
      <select className={style.select} defaultValue={itemsPerPpage} onChange={handleSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </>
  );
};
