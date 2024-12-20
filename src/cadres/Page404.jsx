import React from "react";
import { Link } from "react-router-dom";
import "../styles/globalStyles.css";

const Page404 = () => {
  return (
    <div className="page404-container">
      {/* Titre 404 */}
      <h1 className="page404-title">404</h1>

      {/* Message d'erreur */}
      <p className="page404-message">
        Un problème est survenu lors de la connexion.
      </p>

      {/* Lien vers l'accueil */}
      <Link to="/" className="page404-link">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default Page404;