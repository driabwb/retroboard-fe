import React, { useReducer } from 'react';

import './board.css';

import Column from '../column/column';
import Card from '../card/card';

import ColumnType from '../datatypes/column';
import CardType from '../datatypes/card';
import { BoardState, BoardStateReducer } from '../datatypes/reducer';


type BoardProps = {
}

const initData: BoardState = {
  board: {
    id: "1",
    title: "Temp Board",
  },
  columns: [
    {
      id: "2",
      boardID: "1",
      title: "Col 1",
    },
    {
      id: "3",
      boardID: "1",
      title: "Col 2",
    }
  ],
  cards: [
        {
          id: "4",
          colID: "2",
          boardID: "1",
          text: "Card 1",
          votes: 0
        },
        {
          id: "5",
          colID: "3",
          boardID: "1",
          text: "Card 1",
          votes: 10
        },
        {
          id: "6",
          colID: "3",
          boardID: "1",
          text: "Card 1",
          votes: 5
        },
  ],
}

function Board(props: BoardProps) {
  const [boardState, dispatch] = useReducer(BoardStateReducer, initData);
  const { board, columns, cards } = boardState;

  return (
    <div className="board">
      <h1 className="board-title">{board.title}</h1>
      <span className="columns">
        {
          columns.map((col: ColumnType) => {
            return (
              <Column col={col} key={col.title} dispatch={dispatch} >
                {
                  cards.filter((card: CardType) => card.colID === col.id).map((card: CardType) => {
                    return <Card card={card} dispatch={dispatch} />
                  })
                }
              </Column>
            )
          })
        }
      </span>
    </div>
  )
}

export default Board;
