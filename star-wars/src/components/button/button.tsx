import { FC } from 'react';
import { Callback } from '../../model';

import './button.scss';

export interface ButtonProps<T = unknown> {
  className?: string;
  title: string;
  type?: string;
  disabled?: boolean;
  onClick?: Callback<T>;
}

export const Button: FC<ButtonProps> = ({ title, className, disabled, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </>
  );
};
