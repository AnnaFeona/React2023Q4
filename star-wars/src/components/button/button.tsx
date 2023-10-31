import { Component } from 'react';
import { Callback } from '../../model';

import './button.scss';

export interface ButtonProps<T = unknown> {
  className?: string;
  title: string;
  type?: string;
  onClick?: Callback<T>;
}

export class Button extends Component<ButtonProps> {
  render() {
    const { title, className, onClick } = this.props;
    return (
      <>
        <button className={className} onClick={onClick}>
          {title}
        </button>
      </>
    );
  }
}
