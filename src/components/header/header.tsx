import { useContext } from 'react';
import { MainReducerActions } from '../../actions/MainReducerAction';
import { AppContext } from '../../store/MainContext';
import './header.css';

function Header() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src="../../../img/logo.png" alt="Isiflix" />
        </a>
      </div>
      {state.authenticated && (
        <div>
          <button
            className="logoutButton"
            onClick={() => {
              dispatch({ type: MainReducerActions.Disconnect, payload: '' });
            }}
          >
            Déconnexion
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
