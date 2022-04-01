import { MainReducerActions } from '../actions/MainReducerAction';

export type UsernameAction = {
  type: string;
  payload: string;
};

export const usernameReducer = (
  state: string | null,
  action: UsernameAction
) => {
  switch (action.type) {
    case MainReducerActions.EditName:
      return action.payload;
    default:
      return state;
  }
};
