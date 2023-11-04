import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CardList } from '../../components/cardList/cardList.tsx';

import './main.scss';

export const Main: FC = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('people') || '';

  return (
    <>
      <h1 className="logo">StarWars</h1>
      <CardList request={searchValue} key={searchValue} />
    </>
  );
};
