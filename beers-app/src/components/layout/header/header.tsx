import { FC } from 'react';

import './header.scss';
import { Search } from '../search/search';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <Search />
      </header>
    </>
  );
};
