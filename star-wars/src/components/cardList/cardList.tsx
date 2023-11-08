import { FC, useEffect, useState } from 'react';
import { Beer } from '../../model';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';
import { API_BASE_URL } from '../../model/constants';

interface CardlistProps {
  request: string;
}

export const CardList: FC<CardlistProps> = ({ request }) => {
  const [isLoading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Beer[] | null>(null);

  const results = searchResult || [];

  useEffect(() => {
    getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCards = (): void => {
    setLoading(true);

    fetch(`${API_BASE_URL}${request}`)
      .then((res) => res.json())
      .then((beer) => {
        setLoading(false);
        setSearchResult(beer);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };

  return (
    <>
      <div className="container">
        {!results || (!results.length && !isLoading) ? 'Not found :(' : ''}
        {!isLoading ? results.map((item) => <Card beer={item} key={item.id} />) : <Loader />}
      </div>
    </>
  );
};
