/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { Beer } from '../../model';

import './card.scss';
import { Button } from '../button/button';
import { useNavigate } from 'react-router-dom';

export interface CardProps {
  beer: Beer;
}
export const Card: FC<CardProps> = ({ beer }) => {
  const { id, name, description, image_url } = beer;
  // const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <div className="card">
        <div className="card_info">
          <h2 className="card__title">Name: {name}</h2>
          <div className="card__description">
            <p>Description: {description}</p>
          </div>
          <Button title="Show details" className="card__btn" onClick={handleClick} />
        </div>
        <div className="card_photo">
          <img className="card__image" src={image_url} alt="" />
        </div>
      </div>
    </>
  );
};
