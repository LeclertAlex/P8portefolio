import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Calque_logo leclert alexandre.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
      <img src={logo} alt="Logo Alexandre Leclert" />
        <h1>Portfolio Alexandre Leclert</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/cv-global">CV </Link></li>
          <li><Link to="/projects">Projets</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;