import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Search } from '../search/search';

import './header.scss';

export interface HeaderProps {
  updateSearch: Dispatch<SetStateAction<string>>;
}

export const Header: FC<HeaderProps> = ({ updateSearch }) => {
  const [searchRequest, setSearchRequest] = useState('');

  useEffect(() => {
    updateSearch(searchRequest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRequest]);

  return (
    <>
      <header className="header">
        <Search onSearch={setSearchRequest} />
      </header>
    </>
  );
};
