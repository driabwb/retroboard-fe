import React, { Dispatch, useMemo } from 'react';

import EditableTextControl from '../editableTextControl/editableTextControl';

import './card.css';

import CardType from '../datatypes/card';
import { Action } from '../datatypes/reducer';
import { createCardActions } from '../datatypes/action';

interface CardProps {
  card: CardType;
  dispatch: Dispatch<Action>;
}

function Card({card, dispatch}: CardProps) {
  const { UpdateCardText } = useMemo(() => createCardActions(dispatch), [dispatch]);
  const updateText = (text: string) => {
    UpdateCardText(card.id, text);
  };

  return (
    <div className="card">
      <EditableTextControl onSave={updateText} text={card.text} />
      <p>Votes: {card.votes}</p>
    </div>
  );
}

export default Card;
