import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../store/MainContext';
import { LOGIN_ROUTE } from './routes';

export const AuthenticatedRoute = ({
  redirectPath = LOGIN_ROUTE,
  children,
}) => {
  const context = useContext(AppContext);

  // On peut imaginer stocker l'information dans les cookies, ou avec redux persist, car le store sera reset à reload de page
  if (context.state.authenticated) {
    return children;
  }

  // Si l'on est pas connecté, on redirect.
  return <Navigate to={redirectPath} replace />;
};
