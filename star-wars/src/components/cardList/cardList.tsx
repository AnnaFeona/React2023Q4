import { FC, useContext, useEffect, useState } from 'react';
import { Beer } from '../../model';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';
import { API_BASE_URL } from '../../model/constants';
import { AppContext } from '../../contexts/appContextProvider';
import { updateSearchString } from '../../utils';

interface CardlistProps {
  request?: string;
}

export const CardList: FC<CardlistProps> = () => {
  const [isLoading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Beer[] | null>(null);
  const { searchValue } = useContext(AppContext);

  const results = searchResult || [];

  useEffect(() => {
    setLoading(true);
    const request = updateSearchString(searchValue);

    fetch(`${API_BASE_URL}${request}`)
      .then((res) => res.json())
      .then((beer) => {
        setLoading(false);
        setSearchResult(beer);
      })
      .catch((err) => {
        throw new Error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue]);

  return (
    <>
      <div className="container">
        {!results || (!results.length && !isLoading) ? 'Not found :(' : ''}
        {!isLoading ? results.map((item) => <Card beer={item} key={item.id} />) : <Loader />}
      </div>
    </>
  );
};
