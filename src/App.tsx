import React from 'react';
import Header from './components/header/header';
import RouterIsiflix from './routes/routerIsiflix';
import { AppProvider } from './store/MainContext';

function App() {
  return (
    <AppProvider>
      <Header />
      <RouterIsiflix />
    </AppProvider>
  );
}

export default App;
