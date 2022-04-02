import { MainReducerActions } from '../actions/MainReducerAction';

export type AuthenticatedAction = {
  type: string;
  payload: string;
};

// Reducer gérant l'authentication
// Dans l'ideal on verifierait la validite d'un token jwt et on ne stockerai pas ça dans le store, ou dans un store persistant, mais l'idée est là.
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
