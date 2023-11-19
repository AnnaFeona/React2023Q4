import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import './select.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setItemsPerPage, setPage } from '../../store/pagination.slice';
import { INITIAL_PAGE } from '../../model/constants';

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
      <select className="select" defaultValue={itemsPerPpage} onChange={handleSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </>
  );
};
