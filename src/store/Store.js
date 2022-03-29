import { createContext, useReducer } from 'react';

export const myContext = createContext({
  toto: '',
  tonton: () => {},
});

interface myAction {
  type: string;
  payload?: any;
}

export const ContextProvider = (props) => {
  const helloWorld = () => {
    console.log('hello');
  };

  const appReducer = (state, action: myAction) => {
    switch (action.type) {
      case 'value':
        return {
          ...state,
          toto: 'value',
        };
      default:
        break;
    }
  };

  const [store, dispatch] = useReducer(appReducer, {
    toto: '',
    tonton: helloWorld,
  });

  return (
    <myContext.Provider value={{ store, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};
