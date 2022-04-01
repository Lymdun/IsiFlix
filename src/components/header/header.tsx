import { useContext } from 'react';
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
      <div>{state.username}</div>
      <button>Déconnexion</button>
    </header>
  );
}

export default Header;
