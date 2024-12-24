import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";

const Home = () => {
  const navigate = useNavigate();

  // Exemple de redirection conditionnelle
  useEffect(() => {
    const shouldRedirect = false; // Changez la condition selon vos besoins
    if (shouldRedirect) {
      navigate("/cv-global"); // Exemple de redirection vers une autre page
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <h1>Bienvenue sur mon Portfolio</h1>
        <Presentation />
      </main>
      <Footer />
    </>
  );
};

export default Home;
