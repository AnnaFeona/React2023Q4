/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import style from './cardList.module.scss';
import { useGetBeerByNameQuery } from '../../../services/beers';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setIsLoading, setSearchResult } from '../../../store/search.slice';

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
        <div className={style.container}>
          {isError && `Oups... something went wrong...`}
          {!data?.length || !data ? 'Not found :(' : ''}
          {!isLoading && data?.map((item) => <Card beer={item} key={item.id} />)}
        </div>
      )}
    </>
  );
};
