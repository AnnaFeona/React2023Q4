import { FC } from 'react';
import { Search } from '../search/search';

import './header.scss';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <Search />
      </header>
    </>
  );
};
