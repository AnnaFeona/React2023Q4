import { FC, useEffect } from 'react';
// import { Beer } from '../../model';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';
// import { API_BASE_URL } from '../../model/constants';
// import { AppContext } from '../../contexts/appContextProvider';
// import { updateSearchString } from '../../utils';
import { useGetBeerByNameQuery } from '../../services/beers';
import { useAppSelector } from '../../store/hooks';
import { updateSearchString } from '../../utils';

export const CardList: FC = () => {
  // const { search } = useContext(AppContext);

  const searchValue = useAppSelector((state) => state.pagination.searchValue);
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const { data = [], isLoading, isError } = useGetBeerByNameQuery(updateSearchString(searchValue, page, itemsPerPage));
  // const {} = state;

  useEffect(() => {}, [searchValue, page, itemsPerPage]);

  // useEffect(() => {
  //   beer.setValue?.(searchResult || []);
  // }, [searchResult, beer]);

  return (
    <>
      <div className="container">
        {isError && `Oups... something went wrong...`}
        {/* {(!isLoading && !data.length) || !data ? 'Not found :(' : ''} */}
        {isLoading ? <Loader /> : data.map((item) => <Card beer={item} key={item.id} />)}
      </div>
    </>
  );
};
