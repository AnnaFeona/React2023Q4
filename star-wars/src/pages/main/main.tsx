/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Person, SwapiSearch, SwapiURL } from '../../model';
import { Card } from '../../components/card/card';
import { Loader } from '../../components/loader/loader';

import './main.scss';
import { useSearchParams } from 'react-router-dom';

export const Main: FC = () => {
  const [searchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState<SwapiSearch<Person> | null>(null);
  const [isLoading, setLoading] = useState(false);
  const results = searchResult?.results || [];

  const url = `${SwapiURL.people}?search=`;
  const searchValue = searchParams.get('search') || '';

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    getCards();
  }, [searchParams]);

  const getCards = (): void => {
    setLoading(true);

    fetch(`${url}${searchValue}`)
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
      <main className="main">
        <h1 className="logo">StarWars</h1>
        <div className="container">
          {!results || (!results.length && !isLoading) ? 'Not found :(' : ''}
          {!isLoading ? results.map((person) => <Card person={person} key={person.url} />) : <Loader />}
        </div>
      </main>
    </>
  );
};
