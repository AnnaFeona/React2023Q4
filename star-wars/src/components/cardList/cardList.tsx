import { FC, useEffect, useState } from 'react';
import { SwapiSearch, Person, SwapiURL } from '../../model';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './cardList.scss';

interface CardlistProps {
  request: string;
}

export const CardList: FC<CardlistProps> = ({ request }) => {
  const [isLoading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SwapiSearch<Person> | null>(null);

  const url = `${SwapiURL.people}?search=`;
  const results = searchResult?.results || [];

  useEffect(() => {
    getCards();
  }, []);

  const getCards = (): void => {
    setLoading(true);

    fetch(`${url}${request}`)
      .then((res) => res.json())
      .then((people) => {
        setLoading(false);
        setSearchResult(people);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };

  return (
    <>
      <div className="container">
        {!results || (!results.length && !isLoading) ? 'Not found :(' : ''}
        {!isLoading ? results.map((person) => <Card person={person} key={person.url} />) : <Loader />}
      </div>
    </>
  );
};
