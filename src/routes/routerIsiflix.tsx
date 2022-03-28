import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication/Login/Login';
import { ROOT_ROUTE } from './routes';

export default function RouterIsiflix() {
  return (
    <Router>
      <Routes>
        <Route path={ROOT_ROUTE} element={<Login />} />
        {/* <Route path="*" /> */}
      </Routes>
    </Router>
  );
}
