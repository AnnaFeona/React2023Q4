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
          <div className="card_info">
            <h2 className="card__title">Name: {name}</h2>
            <div className="card__description">
              <p>Gender: {gender}</p>
              <p>Eyes: {eye_color}</p>
              <p>Hair:{hair_color} </p>
            </div>
          </div>
          <div className="card_photo"></div>
        </div>
      </>
    );
  }
}
