import { FC } from 'react';
import { Person } from '../../model';

import './card.scss';
import { Button } from '../button/button';
import { useSearchParams } from 'react-router-dom';

export interface CardProps {
  person: Person;
}
export const Card: FC<CardProps> = ({ person }) => {
  const { name, gender, eye_color, hair_color, url } = person;
  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const id = url?.split('/')[5] || '';
    setSearchParams({ id: id });
    console.log(url, id);
  };

  return (
    <>
      <div className="card">
        <div className="card_info">
          <h2 className="card__title">Name: {name}</h2>
          <div className="card__description">
            <p>Gender: {gender}</p>
            <p>Eyes: {eye_color}</p>
            <p>Hair:{hair_color} </p>
          </div>
          <Button title="Show details" className="card__btn" onClick={handleClick} />
        </div>
        <div className="card_photo"></div>
      </div>
    </>
  );
};
