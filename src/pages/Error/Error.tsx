import React from 'react';
import './Error.css';

function Error() {
  return (
    <div className="error-page--content">
      <div className="error-page--content--body">
        <h1>Vous cherchez votre chemin ?</h1>
        <p>
          Désolés, nous n'avons pas trouvé cette page. Un vaste choix de
          programmes vous attend sur la page d'accueil.
        </p>
        <div className="error-page--content--buttons">
          <a href="/" tabIndex={-1}>
            <button className="error-page--content--buttons--text">
              Accueil Isiflix
            </button>
          </a>
        </div>
        <div className="error-page--content--errorCode">
          <span>
            Code d'erreur : <strong>NSES-404</strong>
          </span>
        </div>
      </div>
      <span className="error-page--imageSource">
        DE <strong>PERDUS DANS L'ESPACE</strong>
      </span>
    </div>
  );
}

export default Error;
