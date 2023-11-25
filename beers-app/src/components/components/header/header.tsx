import { FC } from 'react';

import style from './header.module.scss';
import { Search } from '../search/search';

export const Header: FC = () => {
  return (
    <>
      <header className={style.header}>
        <Search />
      </header>
    </>
  );
};
