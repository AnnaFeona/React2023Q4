import { FC } from 'react';
import { Search } from '../search/search';

import './header.scss';

export const Header: FC = () => {
  // useEffect(() => {
  //   updateSearch(searchRequest);
  // }, [searchRequest]);

  return (
    <>
      <header className="header">
        <Search />
      </header>
    </>
  );
};
