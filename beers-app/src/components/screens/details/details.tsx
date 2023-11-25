import { FC } from 'react';

import style from './details.module.scss';
import { Button } from '../../components/button/button';
import { Loader } from '../../components/loader/loader';
import { useRouter } from 'next/router';
import { useGetBerrByIdQuery } from '../../../services/beers';

interface DetailsProps {
  id: number;
}

export const Details: FC<DetailsProps> = ({ id }) => {
  const router = useRouter();
  const { data = [], isLoading } = useGetBerrByIdQuery(id?.toString() || '');

  const goBack = () => {
    router.push('/');
  };

  return (
    <>
      <div className={style.details__container}>
        <div className={style.details__card}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className={style.details__content}>
              {!data[0] && <h2>Not found</h2>}
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
