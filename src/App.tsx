import React from 'react';
import Header from './components/header/header';
import RouterIsiflix from './routes/routerIsiflix';
import { ContextProvider } from './store/Store';

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <RouterIsiflix />
      </ContextProvider>
    </div>
  );
}

export default App;
