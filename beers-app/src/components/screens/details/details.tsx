import { FC, useState } from 'react';

import style from './details.module.scss';
import { Button } from '../../layout/button/button';
import { Loader } from '../../layout/loader/loader';
import { mockBeerList } from '../../../mocks/cardListMock';

interface DetailsProps {
  id?: string;
}

export const Details: FC<DetailsProps> = ({ id }) => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const { data = [], isLoading } = useGetBerrByIdQuery(id?.toString() || '');
  const [isLoading] = useState(false);
  const data = mockBeerList;

  const goBack = () => {
    // navigate(-1);
  };

  return (
    <>
      <div className={style.details__container}>
        <div className={style.details__card}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className={style.details__content}>
              {data[0] && (
                <>
                  <h2>
                    {data[0].name} {id}
                  </h2>
                  <div className={style.card__description}>{data[0].description}</div>
                  <img className={style.details__image} src={data[0].image_url} alt="" />
                </>
              )}

              <Button title="Close" onClick={goBack} />
            </div>
          )}
        </div>
      </div>
      <div className={style.details__bg} onClick={goBack} role="presentation"></div>
    </>
  );
};
