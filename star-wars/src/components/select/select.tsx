import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import './select.scss';

interface SelectProps {
  limit: number;
  onSelect: Dispatch<SetStateAction<number>>;
}

export const Select: FC<SelectProps> = ({ onSelect, limit }) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(Number(e.target.value));
  };

  return (
    <>
      <select className="select" defaultValue={limit} onChange={handleSelect}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </>
  );
};
