import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from '../pages/Browse/Browse';
import Error from '../pages/Error/Error';
import { ROOT_ROUTE, NO_MATCH_ROUTE } from './routes';

export default function RouterIsiflix() {
  return (
    <Router>
      <Routes>
        <Route path={ROOT_ROUTE} element={<Browse />} />
        <Route path={NO_MATCH_ROUTE} element={<Error />} />
      </Routes>
    </Router>
  );
}
