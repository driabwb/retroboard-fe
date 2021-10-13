import BoardType from './board';
import ColumnType from './column';
import CardType from './card';
import IDed from './IDed';

export enum ActionType {
  UpdateBoardTitle = "UpdateBoardTitle",
  AddColumn = "AddColumn",
  UpdateColumnTitle = "UpdateColumnTitle",
  AddCard = "AddCard",
  UpdateCardText = "UpdateCardText",
  AddVote = "AddVote",
  RemoveVote = "RemoveVote",
};

export enum TargetType {
  Board,
  Column,
  Card,
};

export interface Action {
  type: ActionType;
  targetType: TargetType;
  payload: any;
}

export interface BoardState {
  board: BoardType;
  columns: ColumnType[];
  cards: CardType[];
}

export function BoardStateReducer(state: BoardState, action: Action): BoardState {
  switch (action.targetType) {
    case TargetType.Board:
      return {
        ...state,
        board: boardReducer(state.board, action),
      };
    case TargetType.Column:
      return {
        ...state,
        columns: columnsReducer(state.columns, action),
      };
    case TargetType.Card:
    return {
      ...state,
      cards: cardsReducer(state.cards, action),
    }
  }

  return state;
}


function boardReducer(state: BoardType, action: Action): BoardType {
  switch (action.type) {
    case ActionType.UpdateBoardTitle:
      return {
        ...state,
        title: action.payload,
      };
  }

  return state;
}

function columnsReducer(cols: ColumnType[], {type, payload}: Action): ColumnType[] {
  switch (type) {
    case ActionType.AddColumn:
      return [
        ...cols,
        payload,
      ];
    case ActionType.UpdateColumnTitle:
      return actOn(payload.id, cols, (col: ColumnType) => ({...col, title: payload.title}));
  }

  return cols;
}

function cardsReducer(cards: CardType[], {type, payload}: Action): CardType[] {
  switch (type) {
    case ActionType.AddCard:
      return [
        ...cards,
        payload,
      ];
    case ActionType.UpdateCardText:
      return actOn(payload.id, cards, (card: CardType) => ({...card, text: payload.text}));
    case ActionType.AddVote:
      return actOn(payload.id, cards, (card: CardType) => ({...card, votes: card.votes + 1 }));
    case ActionType.RemoveVote:
      return actOn(payload.id, cards, (card: CardType) => ({...card, votes: card.votes - 1 }));
  }

  return cards;
}

function actOn<Type extends IDed>(id: string, list: Type[], update: (i: Type) => Type): Type[] {
  return list.map((elem: Type) => {
    if (id !== elem.id) {
      return elem;
    }

    return update(elem);
  });
}
