import { FC } from 'react';
import style from './notFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <>
      <div className={style.container}>404. Page not found</div>
    </>
  );
};
