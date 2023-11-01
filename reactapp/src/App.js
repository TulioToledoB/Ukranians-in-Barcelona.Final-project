import React, { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
//import TextComponent from "./components/Textcomponent"; // Importa el nuevo componente
import Footer from "./components/Footer";
import GeneralBody from "./components/GeneralBody/GeneralBody";
import TextComponent from "./components/Textcomponent";
import { Routes, Route } from "react-router-dom";
import Hospitals from "./components/SectorsBody/Hospitals";
import SocialServices from "./components/SectorsBody/SocialServices";
import Legalize from "./components/SectorsBody/Legalization_in_spain";
import FamousQuestions from  "./components/SectorsBody/FamousQuestions";

function App() {
  const [areas, setAreas] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [police, setPolice] = useState([]);

  function fetchAreas() {
    fetch("http://localhost:5000/areas")
      .then((response) => response.json())
      .then((data) => {
        setAreas(data);
        console.log(data);
      });
  }

  function fetchLawyers() {
    fetch("http://localhost:5000/lawyers")
      .then((response) => response.json())
      .then((data) => {
        setLawyers(data);
        console.log(data);
      });
  }
  function fetchPolice() {
    fetch("http://localhost:5000/lawyers")
      .then((response) => response.json())
      .then((data) => {
        setPolice(data);
        console.log(data);
      });
  }

  return (
    <div className="app">
      <Header
        onAreasClick={fetchAreas}
        onLawyersClick={fetchLawyers}
        onPoliceClick={fetchPolice}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Image />

              <TextComponent text={"Welcome to Barcelona"} />
              <GeneralBody areas={areas} lawyers={lawyers} police={police} />
            </>
          }
        />
        <Route path="/social_services" Component={SocialServices} />
        <Route path="/legalize" Component={Legalize} />
        <Route path="/hospitals" Component={Hospitals} />
        <Route path="/lawyers_police" Component={Image} />
        <Route path="/job_offers" Component={Image} />
        <Route path="/questions_famouses" Component={FamousQuestions} />
        <Route path="/about_us" Component={Image} />
        <Route path="/events" Component={Image} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
