import { FC, useEffect, useState } from 'react';

import './details.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../model/constants';
import { Button } from '../../components/button/button';
import { Beer } from '../../model';
import { Loader } from '../../components/loader/loader';

export const Details: FC = () => {
  const [card, setCard] = useState<Beer | null>(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetails = () => {
    const url = `/${id}`;
    setLoading(true);
    fetch(`${API_BASE_URL}${url}`)
      .then((res) => res.json())
      .then((beer) => {
        setCard(beer[0]);
      })
      .catch((err) => {
        throw new Error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="details__container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="details__card">
            {card && (
              <>
                <h2>{card.name}</h2>
                <div className="card__description">{card.description}</div>
                <img className="details__image" src={card.image_url} alt="" />
              </>
            )}

            <Button title="Close" onClick={goBack} />
          </div>
        )}
      </div>
      <div className="details__bg" onClick={goBack} role="presentation"></div>
    </>
  );
};
