import { FC } from 'react';

import './details.scss';
import { useParams } from 'react-router-dom';

export const Details: FC = () => {
  const { id } = useParams();
  return (
    <>
      <div>Details {id}</div>
    </>
  );
};
