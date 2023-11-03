import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Search } from '../search/search';

import './header.scss';

export interface HeaderProps {
  updateSearchRequest: Dispatch<SetStateAction<string>>;
}

export const Header: FC<HeaderProps> = ({ updateSearchRequest }) => {
  const [searchRequest, setSearchRequest] = useState('');

  useEffect(() => {
    updateSearchRequest(searchRequest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRequest]);

  const updateData = (value: string | undefined) => {
    if (!value) value = '';
    setSearchRequest(value);
  };

  return (
    <>
      <header className="header">
        <Search updateSearchRequest={updateData} />
      </header>
    </>
  );
};
