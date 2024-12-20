import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./cadres/Home"; // Mise à jour du chemin
import CVFrontEnd from "./cadres/CVFrontEnd";
import CVBackEnd from "./cadres/CVBackEnd";
import CVChefProjet from "./cadres/CVChefProjet";
import "./styles/globalStyles.css";
import "./styles/cvGlobal.css";
import Page404 from "./cadres/Page404";
import LegalMentions from "./cadres/LegalMentions";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv-frontend" element={<CVFrontEnd />} />
        <Route path="/cv-backend" element={<CVBackEnd />} />
        <Route path="/cv-chef-projet" element={<CVChefProjet />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        {/* pour toutes les autres URL  */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
