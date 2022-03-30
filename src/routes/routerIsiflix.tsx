import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from '../pages/Browse/Browse';
import Details from '../pages/Details/Details';
import Error from '../pages/Error/Error';
import Login from '../pages/Login/Login';
import {
  ROOT_ROUTE,
  NO_MATCH_ROUTE,
  DETAILS_ROUTE,
  LOGIN_ROUTE,
} from './routes';

export default function RouterIsiflix() {
  return (
    <Router>
      <Routes>
        <Route path={ROOT_ROUTE} element={<Browse />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={`${DETAILS_ROUTE}/:movieId`} element={<Details />} />
        <Route path={NO_MATCH_ROUTE} element={<Error />} />
      </Routes>
    </Router>
  );
}
