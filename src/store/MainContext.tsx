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

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UsernameAction | AuthenticatedAction>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = (
  { username, authenticated }: InitialStateType,
  action: UsernameAction | AuthenticatedAction
) => ({
  username: usernameReducer(username, action),
  authenticated: authenticatedReducer(authenticated, action),
});

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
