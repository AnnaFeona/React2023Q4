import { Component } from 'react';
import { Person } from '../../model';

import './card.scss';

export interface CardProps {
  person: Person;
}
export class Card extends Component<CardProps> {
  render() {
    const { person } = this.props;
    const { name, gender, eye_color, hair_color } = person;
    return (
      <>
        <div className="card">
          <h2 className="card__title">{name}</h2>
          <div className="card__description">{`${gender} ${eye_color} ${hair_color}`}</div>
        </div>
      </>
    );
  }
}
