import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/cvGlobal.css"; 
import cvData from "../data/cvData"; // Import des données
import photo from "../assets/Snapchat-alexandre marriage.jpg";
import { Link } from "react-router-dom";

const CVGlobal = () => {
  const { CVGlobalcompetences, CVGlobalsoftSkills, projects, globalCompetences, globalformations } = cvData;
  const title = "CV GLOBAL"; // Définition du titre manquant

  return (
    <>
      <Header />
      <main>
        <section className="cv-section">
          {/* Colonne première ligne */}
          <div className="cv-top">
            <img src={photo} alt="Portrait d'Alexandre Leclert" className="cv-photo" />
            <div className="infotop">
              <h1>Alexandre Leclert</h1>
              <h2>{title}</h2>
            </div>
          </div>

          {/* Contenu du CV */}
          <div className="cv-soustop">
            {/* Lien vers les offres spécifiques */}
            <div className="sectionoffre">
              <p>
                <Link to="/cv-backend">offre Back-end</Link>{" "}
                <Link to="/cv-frontend">offre Front-end</Link>{" "}
                <Link to="/cv-chef-projet">offre Chef de Projet</Link>
              </p>
            </div>
          </div>

          <div className="cv-content">
            {/* Section Compétences Globales */}
            <div className="section">
              <div className="cv-ASF">
                <h2>💼 Compétences Globales</h2>
                <ul>
                  {globalCompetences.competences.map((comp, index) => (
                    <li key={index}>{comp}</li>
                  ))}
                </ul>
              </div>

              {/* Section Soft Skills */}
              <div className="cv-ASF">
                <h2>🤝 Soft Skills</h2>
                <ul>
                  {CVGlobalsoftSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Section Compétences Techniques */}
              <div className="cv-ASF">
                <h2>💻 Compétences Techniques</h2>
                <ul>
                  {CVGlobalcompetences.map((comp, index) => (
                    <li key={index}>{comp}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="alexandre-parcours">
              {/* Section Projets */}
              <div className="section">
                <h2>🏆 Projets</h2>
                <ul>
                  {projects.map((project, index) => (
                    <li key={index}>
                      <strong>{project.year}</strong>: {project.description}
                      {project.details && ` - ${project.details}`}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          (Voir le projet)
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section Langues */}
              <div className="section">
                <h2>🌍 Langues</h2>
                <ul>
                  {globalCompetences.langues.map((langue, index) => (
                    <li key={index}>{langue}</li>
                  ))}
                </ul>
              </div>

              {/* Section Formations */}
            <div className="section">
              <h2>🎓 Formations</h2>
              <ul>
                {globalformations.map((formation, index) => (
                  <li key={index}>
                    <strong>{formation.year}</strong>: {formation.description}
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CVGlobal;
