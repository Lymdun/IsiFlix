import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from '../pages/Browse/Browse';
import { ROOT_ROUTE } from './routes';

export default function RouterIsiflix() {
  return (
    <Router>
      <Routes>
        <Route path={ROOT_ROUTE} element={<Browse />} />
        {/* <Route path="*" /> */}
      </Routes>
    </Router>
  );
}
