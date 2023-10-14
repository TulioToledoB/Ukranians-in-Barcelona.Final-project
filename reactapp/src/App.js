import React, { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import TextComponent from "./components/Textcomponent"; // Importa el nuevo componente
//import Footer from "./components/Footer";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Image />
      <TextComponent text="¡Welcome to Barcelona!" /> {}
    </div>
  );
}

export default App;
