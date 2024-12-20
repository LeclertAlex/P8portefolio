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
          <li><Link to="/cv-frontend">CV Front-end</Link></li>
          <li><Link to="/cv-backend">CV Back-end</Link></li>
          <li><Link to="/cv-chef-projet">CV Chef de Projet</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;