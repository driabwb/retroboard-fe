import React, { Dispatch, ReactNode } from 'react';

import './column.css';

import ColumnType from '../datatypes/column';
import { Action } from '../datatypes/reducer';

type ColumnProps = {
  col: ColumnType;
  dispatch: Dispatch<Action>;
  children: ReactNode;
}

function Column({col, children}: ColumnProps) {
  return (
    <div className="column">
      <h2 className="column-title">{col.title}</h2>
      {
        children
      }
      <button>+</button>
    </div>
  );
}

export default Column;
