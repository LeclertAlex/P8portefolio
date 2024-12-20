import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Calque_logo leclert alexandre.png"; // Assurez-vous que le chemin est correct.
import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/globalStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
      <img src={logo} alt="Logo Alexandre Leclert" />
      </div>

      {/* Coordonnées */}
      <div className="footer-contact">
        <p>
          <FaPhone /> <a href="tel:+33644014143">06 44 01 41 43</a>
        </p>
        <p>
          <FaEnvelope /> <a href="mailto:leclertalexandre@gmail.com">leclertalexandre@gmail.com</a>
        </p>
      </div>

      {/* Mentions légales */}
      <div className="footer-legal">
        <p>
          <Link to="/mentions-legales">Mentions légales</Link>
        </p>
        <p>© 2024 Alexandre Leclert - Tous droits réservés</p>
      </div>

      {/* Réseaux sociaux */}
      <div className="footer-social">
        <a href="https://x.com/tiers_liste" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/tiers_liste/profilecard/?igsh=Z3o5OGoyNDlqcXIy" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/LeclertAlex" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
