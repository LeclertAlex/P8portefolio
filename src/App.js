import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./cadres/Home"; // Mise à jour du chemin
import CVFrontEnd from "./cadres/CVFrontEnd";
import CVBackEnd from "./cadres/CVBackEnd";
import CVChefProjet from "./cadres/CVChefProjet";
import CVGlobal from "./cadres/CVGlobal";
import "./styles/globalStyles.css";
import "./styles/cvGlobal.css";
import Page404 from "./cadres/Page404";
import LegalMentions from "./cadres/LegalMentions";
import ProjectsPage from "./cadres/ProjectsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv-global" element={<CVGlobal/>} />
        <Route path="/cv-frontend" element={<CVFrontEnd />} />
        <Route path="/cv-backend" element={<CVBackEnd />} />
        <Route path="/cv-chef-projet" element={<CVChefProjet />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        {/* pour toutes les autres URL  */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
