import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src="../../../img/logo.png" alt="Isiflix" />
        </a>
      </div>
    </header>
  );
}

export default Header;
