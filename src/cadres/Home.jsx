import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation"; // Remplacement par Presentation


const Home = () => {
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