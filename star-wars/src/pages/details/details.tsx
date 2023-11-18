import { FC } from 'react';

import './details.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { Loader } from '../../components/loader/loader';
import { useGetBerrByIdQuery } from '../../services/beers';

export const Details: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data = [], isLoading } = useGetBerrByIdQuery(id?.toString() || '');

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
            {data[0] && (
              <>
                <h2>{data[0].name}</h2>
                <div className="card__description">{data[0].description}</div>
                <img className="details__image" src={data[0].image_url} alt="" />
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
