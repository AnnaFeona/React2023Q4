import { FC } from 'react';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import style from './cardList.module.scss';
import { beerApi, useGetBeerByNameQuery } from '../../../services/beers';
import { useAppSelector } from '../../../store/hooks';
import { wrapper } from '../../../store/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(beerApi.endpoints.getBeerByName.initiate({}));

  Promise.all(store.dispatch(beerApi.util.getRunningQueriesThunk()));

  return { props: {} };
});

export const CardList: FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const page = useAppSelector((state) => state.pagination.page);
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage);
  const { data, isLoading, isError, isFetching } = useGetBeerByNameQuery({
    name: searchValue,
    page,
    perPage: itemsPerPage,
  });

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
