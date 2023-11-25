import { FC } from 'react';

import style from './card.module.scss';
import { Button } from '../button/button';
import { Beer } from '../../../model';
// import { useNavigate } from 'react-router-dom';

export interface CardProps {
  beer: Beer;
}
export const Card: FC<CardProps> = ({ beer }) => {
  const { name, description, image_url } = beer;
  // const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/details/${id}`);
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.card_info}>
          <h2 className={style.card__title}>Name: {name}</h2>
          <div className={style.card__description}>
            <p>Description: {description}</p>
          </div>
          <Button title="Show details" className={style.card__btn} onClick={handleClick} />
        </div>
        <div className={style.card_photo}>
          <img className={style.card__image} src={image_url} alt="" />
        </div>
      </div>
    </>
  );
};
