import React from "react";
import cvData from "../data/cvData";
import photo from "../assets/IMG-20221117-alexandre orale.jpg";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="image-presentation">
      <img src={photo} alt="IMG-20221117-alexandre orale.jpg" />
      </div>
      {/* Présentation personnelle */}
      <div className="section-presentation">
        <h2>🎤 Présentation</h2>
        <p>
        Je suis un garçon contemplatif, parfois un peu dans ses rêves, mais toujours profondément 
        investi dans les projets et les tâches qui me sont confiés, toujours motivé par la recherche 
        de solutions créatives. Si une tâche ou un objectif ne m'inspire pas, je n'hésite pas à le dire 
        clairement. J’ai une capacité naturelle à jongler entre des discussions indirectes, pour ménager 
        les sensibilités,et des prises de position franches lorsque cela s’avère nécessaire.
        </p>
        <p>
        Je vis souvent dans mes pensées, explorant des idées ou des concepts variés, mais face
         à chaque obstacle, je suis prêt à affronter le mur, à en tirer des leçons et à trouver des 
         moyens innovants de le surmonter. J’aime toucher à tout et découvrir de nouveaux horizons, ce qui 
         alimente ma soif d’apprendre et mon enthousiasme .
        </p>
        <p>
        Mon tempérament bavard me vaut souvent la réputation d’être un moulin à paroles, mais c’est 
        une facette qui me permet de créer du lien et de partager ma bonne humeur. De nature optimiste 
        et volontaire, je m’épanouis particulièrement dans un environnement où l’équipe joue un rôle 
        moteur. Si je suis bien encadré, orienté dans la bonne direction, et nourri par des projets 
        stimulants, je peux devenir un véritable moteur pour mon équipe, transmettant ma motivation 
        et capacité à fédérer autour d'objectifs communs.
        </p>
      </div>

      {/* Projets réalisés */}
      <div className="section-projets-presentation">
        <h2>🏆 Projets Réalisés</h2>
        <ul>
          {cvData.projects.map((project, index) => (
            <li key={index}>
              <strong>{project.year}</strong>: {project.description}
              {project.details && <p>{project.details}</p>}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Voir le projet
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Stages */}
      <div className="section-stages-presentation">
        <h2>🎓 Stages et Expériences</h2>
        <ul>
          {cvData.stages.map((stage, index) => (
            <li key={index}>
              <strong>{stage.year}</strong>: {stage.description}
              {stage.details && <p>{stage.details}</p>}
            </li>
          ))}
        </ul>
      </div>

      {/* Compétences clés */}
      <div className="section-competance-cles">
        <h2>💻 Compétences Clés</h2>
        <ul>
          <li><strong>HTML/CSS</strong> : Création de pages web responsive</li>
          <li><strong>React</strong> : Développement de composants dynamiques</li>
          <li><strong>Node.js</strong> / Express : Création d'API sécurisées</li>
          <li><strong>MongoDB</strong> : Gestion des bases de données</li>
          <li><strong>Gestion de projet Agile</strong> : Organisation et planification</li>
          <li><strong>Photoshop, Illustrator, Figma</strong> : Création d’interfaces et design</li>
        </ul>
      </div>

      {/* Objectifs professionnels */}
      <div className="section-objectifs-presentation">
        <h2>🎯 Objectifs</h2>
        <ul>
          <li>Devenir développeur indépendant</li>
          <li>Développeur Full Stack</li>
          <li>Développeur Web</li>
          <li>Juriste Internet</li>
        </ul>
      </div>
    </section>
  );
};

export default Presentation;
