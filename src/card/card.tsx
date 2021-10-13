import React, { Dispatch } from 'react';

import './card.css';

import CardType from '../datatypes/card';
import { Action } from '../datatypes/reducer';

type CardProps = {
  card: CardType;
  dispatch: Dispatch<Action>;
}

function Card({card}: CardProps) {
  return (
    <div className="card">
      <p>{card.text}</p>
      <p>Votes: {card.votes}</p>
    </div>
  );
}

export default Card;
