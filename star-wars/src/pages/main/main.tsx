import { FC, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { CardList } from '../../components/cardList/cardList.tsx';

import './main.scss';
import { Pagination } from '../../components/pagination/pagination.tsx';
import { AppContext } from '../../contexts/appContextProvider.tsx';

export const Main: FC = () => {
  // const location = useLocation();
  // const [searchParams] = useSearchParams();
  const { searchValue } = useContext(AppContext);
  // const [searchRequest, setSearchRequest] = useState('');

  // useEffect(() => {
  //   setSearchRequest(location.search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  // setSearchValue(searchParams.get('beer_name') || '');
  // if (location.pathname === '/') {
  //   setSearchRequest(location.search);
  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.search]);

  return (
    <>
      <div className="page">
        <Outlet />

        <div className="main-layout">
          <h1 className="logo">ColdBeer</h1>
          <Pagination searchValue={searchValue} key={`p${searchValue}`} />
          <CardList />
        </div>
      </div>
    </>
  );
};
