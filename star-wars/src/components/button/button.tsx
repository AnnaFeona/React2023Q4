import { FC } from 'react';
import { Callback } from '../../model';

import './button.scss';

export interface ButtonProps<T = unknown> {
  className?: string;
  title: string;
  type?: string;
  onClick?: Callback<T>;
}

export const Button: FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </>
  );
};
