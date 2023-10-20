import React, { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
//import TextComponent from "./components/Textcomponent"; // Importa el nuevo componente
import Footer from "./components/Footer";
import GeneralBody from "./components/GeneralBody/GeneralBody";

function App() {
  return (
    <div className="app">
      <Header />
      <Image />
      <GeneralBody />
      <Footer />
    </div>
  );
}

export default App;
