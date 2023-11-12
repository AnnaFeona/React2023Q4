import { FC, useContext, useEffect, useState } from 'react';
import { Beer } from '../../model';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';
import { API_BASE_URL } from '../../model/constants';
import { AppContext } from '../../contexts/appContextProvider';
import { updateSearchString } from '../../utils';

export const CardList: FC = () => {
  const { search, page, limit, beer } = useContext(AppContext);

  const [isLoading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Beer[]>(beer.value);
  const [isFetchError, setFetchError] = useState(false);

  const results = beer.value;

  useEffect(() => {
    setLoading(true);
    const request = updateSearchString(search.value, page.value, limit.value);

    fetch(`${API_BASE_URL}${request}`)
      .then((res) => res.json())
      .then((beer) => {
        setLoading(false);
        setSearchResult(beer);
      })
      .catch((err) => {
        setFetchError(true);
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search.value, limit.value, page.value]);

  useEffect(() => {
    beer.setValue?.(searchResult || []);
  }, [searchResult, beer]);

  return (
    <>
      <div className="container">
        {isFetchError && `Oups... something went wrong...`}
        {(!isLoading && !results.length) || !results ? 'Not found :(' : ''}
        {!isLoading ? results.map((item) => <Card beer={item} key={item.id} />) : <Loader />}
      </div>
    </>
  );
};
