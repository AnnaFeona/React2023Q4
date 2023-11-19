/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';
import { useGetBeerByNameQuery } from '../../services/beers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setIsLoading, setSearchResult } from '../../store/search.slice';

export const CardList: FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const { data, isLoading, isError, isFetching } = useGetBeerByNameQuery({
    name: searchValue,
    page,
    perPage: itemsPerPage,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(isLoading || isFetching));
  }, [isLoading, isFetching]);

  useEffect(() => {
    dispatch(setSearchResult(data || []));
  }, [data]);

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
