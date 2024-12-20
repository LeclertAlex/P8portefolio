import React from "react";
import { Link } from "react-router-dom";
import "../styles/globalStyles.css";
const LegalMentions = () => {
  return (
    <div className="LegalMention-container">
      <h2>Mentions légales</h2>
      <div className="LegalMention">
      <p>
        <strong>Site édité par</strong> Alexandre Leclert<br />
        <strong> Adresse</strong> : Colombes, Paris, France<br />
        <strong> Email </strong>: <a href="mailto:leclertalexandre@gmail.com">leclertalexandre@gmail.com</a><br />
      </p>
      <p>
      <strong>Hébergement</strong> :<br />
        Nom de l’hébergeur :<strong> GitHub Pages</strong><br />
        Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />
        <strong>Site</strong> : <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">pages.github.com</a>
      </p>
      <p>
        Ce site est un portfolio personnel dans le cadre de la formation OpenClassrooms. Aucune donnée personnelle des utilisateurs n’est collectée ou traitée.
      </p>
      {/* Lien vers l'accueil */}
      <Link to="/" className="LegalMention-link">
        Retour à l'accueil
      </Link>
    </div>
    </div>
  );
};

export default LegalMentions;
