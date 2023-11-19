import { FC } from 'react';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';
import { useGetBeerByNameQuery } from '../../services/beers';
import { useAppSelector } from '../../store/hooks';
import { updateSearchString } from '../../utils';

export const CardList: FC = () => {
  const searchValue = useAppSelector((state) => state.pagination.searchValue);
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const { data, isLoading, isError, isFetching } = useGetBeerByNameQuery(
    updateSearchString(searchValue, page, itemsPerPage),
  );

  return (
    <>
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div className="container">
          {isError && `Oups... something went wrong...`}
          {!data?.length || !data ? 'Not found :(' : ''}
          {!isLoading && data?.map((item) => <Card beer={item} key={item.id} />)}
        </div>
      )}
    </>
  );
};
