import { Dispatch } from 'react';

import { v4 as newUUID } from 'uuid';

import { Action, ActionType } from './reducer';
// Create Action methods for dispatching Actions

export interface CardActions {
  AddVote: (id: string) => void;
  RemoveVote: (id: string) => void;
  UpdateCardText: (id: string, text: string) => void;
  RemoveCard: (id: string) => void;
}

export function createCardActions(dispatch: Dispatch<Action>): CardActions {
  return {
    AddVote: (id: string) => {
      dispatch({
        type: ActionType.AddVote,
        payload: { id }
      });
    },
    RemoveVote: (id: string) => {
      dispatch({
        type: ActionType.RemoveVote,
        payload: { id }
      });
    },
    UpdateCardText: (id: string, text:string) => {
      dispatch({
        type: ActionType.UpdateCardText,
        payload: { id, text }
      });
    },
    RemoveCard: (id: string) => {
      dispatch({
        type: ActionType.RemoveCard,
        payload: id,
      });
    },
  };
}

export interface ColumnActions {
  UpdateColumnTitle: (id: string, title: string) => void;
  AddCard: (colID: string) => void;
  RemoveColumn: (colID: string) => void;
}

export function createColumnActions(dispatch: Dispatch<Action>): ColumnActions {
  return {
    UpdateColumnTitle: (id: string, title: string) => {
      dispatch({
        type: ActionType.UpdateColumnTitle,
        payload: { id, title },
      });
    },
    AddCard: (colID: string) => {
      dispatch({
        type: ActionType.AddCard,
        payload: { 
          id: newUUID(), 
          colID,  
          text: newUUID(),
          votes: 0,
        },
      });
    },
    RemoveColumn: (colID: string) => {
      dispatch({
        type: ActionType.RemoveColumn,
        payload: colID,
      });
    },
  };
}




export interface BoardActions {
  UpdateBoardTitle: (title: string) => void;
  AddColumn: () => void;
}

export function createBoardActions(dispatch: Dispatch<Action>): BoardActions {
  return {
    UpdateBoardTitle: (title: string) => {
      dispatch({
        type: ActionType.UpdateBoardTitle,
        payload: title,
      });
    },
    AddColumn: () => {
      dispatch({
        type: ActionType.AddColumn,
        payload: {
          id: newUUID(),
        },
      });
    },
  }
}
