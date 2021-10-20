import React, { Dispatch, ReactNode, useMemo } from 'react';

import { createColumnActions } from '../datatypes/action';

import './column.css';

import EditableTextControl from '../editableTextControl/editableTextControl';

import ColumnType from '../datatypes/column';
import { Action } from '../datatypes/reducer';

type ColumnProps = {
  col: ColumnType;
  dispatch: Dispatch<Action>;
  children: ReactNode;
}

function Column({col, dispatch, children}: ColumnProps) {
  const { UpdateColumnTitle, AddCard } = useMemo(() => createColumnActions(dispatch), [dispatch]);
  const updateTitle = (text: string) => {
    UpdateColumnTitle(col.id, text);
  }

  const addCard = () => {
    AddCard(col.id);
  }

  return (
    <div className="column">
      <h2 className="column-title"><EditableTextControl onSave={updateTitle} text={col.title} /></h2>
      {
        children
      }
      <button onClick={addCard} >+</button>
    </div>
  );
}

export default Column;
