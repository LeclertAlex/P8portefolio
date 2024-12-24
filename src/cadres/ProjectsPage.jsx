import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/cvGlobal.css"; // Créez un fichier CSS spécifique si nécessaire
import cvData from "../data/cvData"; // Importez vos données

const ProjectsPage = () => {
  const { projects } = cvData;

  return (
    <>
      <Header />
      <main>
        <section className="projects-section">
          <h1>Mes Projets</h1>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h2>{project.year} - {project.description}</h2>
                {project.details && <p>{project.details}</p>}
                {project.extraDetails && (
                  <p className="extra-details">{project.extraDetails}</p>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Voir le projet
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
