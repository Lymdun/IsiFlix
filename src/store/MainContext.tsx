import React, { createContext, Dispatch, useReducer } from 'react';
import {
  AuthenticatedAction,
  authenticatedReducer,
} from '../reducers/authenticatedReducer';
import { UsernameAction, usernameReducer } from '../reducers/usernameReducer';

type InitialStateType = {
  username: string | null;
  authenticated: boolean;
};

const initialState = {
  username: null,
  authenticated: false,
};

// Gestion du store avec un mainContext et d'un provider
export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UsernameAction | AuthenticatedAction>;
}>({ state: initialState, dispatch: () => null });

// Ce reducer est chargé de dispatcher les evenements aux reducers de chaques type
const mainReducer = (
  { username, authenticated }: InitialStateType,
  action: UsernameAction | AuthenticatedAction
) => ({
  username: usernameReducer(username, action),
  authenticated: authenticatedReducer(authenticated, action),
});

// Renvoi du provider
export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
