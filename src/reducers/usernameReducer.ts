import { MainReducerActions } from '../actions/MainReducerAction';

export type UsernameAction = {
  type: string;
  payload: string;
};

// Reducer gérant le nom de l'utilisateur selectionné
export const usernameReducer = (
  state: string | null,
  action: UsernameAction
) => {
  switch (action.type) {
    case MainReducerActions.EditName:
      return action.payload;
    case MainReducerActions.Disconnect:
      return '';
    default:
      return state;
  }
};
