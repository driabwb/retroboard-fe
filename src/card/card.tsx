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
  const { UpdateCardText, AddVote, RemoveVote } = useMemo(() => createCardActions(dispatch), [dispatch]);
  const updateText = (text: string) => {
    UpdateCardText(card.id, text);
  };

  const addVote = () => { AddVote(card.id) };
  const removeVote = () => { RemoveVote(card.id) };

  return (
    <div className="card">
      <EditableTextControl onSave={updateText} text={card.text} />
      <p>
        <button onClick={removeVote} >-</button>
        Votes: {card.votes}
        <button onClick={addVote} >+</button>
      </p>
    </div>
  );
}

export default Card;
