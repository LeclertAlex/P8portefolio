import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cvData from "../data/cvData";
import "../styles/cvGlobal.css"; // Import du style global pour les CV
import photo from "../assets/Snapchat-alexandre marriage.jpg"; // Ajoute ton image ici
const { competences: globalCompetences } = cvData.globalCompetences;

const CVFrontEnd = () => {
  const { title, objectifs, competences, experiences, softSkills,postesVise, formations, centresinterets } = cvData.frontend;

  return (
    <>
      <Header />
      <main>
        <section className="cv-section">
          {/* Colonne premierre ligne */}
          <div className="cv-top">
            <img src={photo} alt="Snapchat-alexandre-marriage.jpg" />
            <div className="infotop">
            <h1>Alexandre Leclert</h1>
            <h2>{title}</h2>
          </div>
          </div>

          <div className="cv-content">
          <div className="alexandre-savoir-faire">
          {/* Colonne droite */}
          <div className="cv-ASF">
            {/* 🎯 Objectifs */}
            <div className="section">
              <h2>🎯 Objectifs</h2>
              <ul>
                {objectifs.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>

            {/* Compétences */}
          <div className="alexandre-savoir-faire">
            <div className="cv-ASF">
              <div className="section">
                <h2>💻 Compétences</h2>
                <ul>
                  {/* Affichage des compétences spécifiques */}
                  {competences.map((comp, index) => (
                    <li key={`specific-${index}`}>{comp}</li>
                  ))}
                  {/* Affichage des compétences globales */}
                  {globalCompetences.map((comp, index) => (
                    <li key={`global-${index}`}>{comp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

            {/* 🤝 Soft Skills */}
            <div className="section">
              <h2>🤝 Soft Skills</h2>
              <ul>
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          </div>

          <div className="alexandre-parcours">
            {/* 🏆 Expériences */}
            <div className="section">
              <h2>🏆 Expériences</h2>
              <ul>
                {experiences.map((exp, index) => (
                  <li key={index}>
                    <strong>{exp.year}</strong>: {exp.description}{" "}
                    {exp.link && <a href={exp.link} target="_blank" rel="noreferrer">(Voir le projet)</a>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Centres d’Intérêts */}
      <div className="section-centres-interets">
        <h2>🎯 Centres d’Intérêts</h2>
        <ul>
          {centresinterets.map((interest, index) => (
            <li key={index}>
              <strong>{interest.category}</strong>: {interest.details}
            </li>
          ))}
        </ul>
      </div>

      {/* Section Formations */}
      <div className="section-formations">
        <h2>🎓 Formations</h2>
        <ul>
          {formations.map((formation, index) => (
            <li key={index}>
              <strong>{formation.year}</strong>: {formation.description}
            </li>
          ))}
        </ul>
      </div>

      {/* 🎯 Postes visés */}
      <div className="section">
          <h2>🎯 Postes visés</h2>
          <ul>
            {postesVise.map((poste, index) => (
              <li key={index}>{poste}</li>
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

export default CVFrontEnd;