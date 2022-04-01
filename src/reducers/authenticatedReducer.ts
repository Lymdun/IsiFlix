import { MainReducerActions } from '../actions/MainReducerAction';

export type AuthenticatedAction = {
  type: string;
  payload: string;
};

export const authenticatedReducer = (
  state: boolean,
  action: AuthenticatedAction
) => {
  switch (action.type) {
    case MainReducerActions.Authenticate:
      return true;
    case MainReducerActions.Disconnect:
      return false;
    default:
      return state;
  }
};
