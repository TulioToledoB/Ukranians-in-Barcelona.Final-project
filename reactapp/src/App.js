import React, { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
//import TextComponent from "./components/Textcomponent"; // Importa el nuevo componente
import Footer from "./components/Footer";
import GeneralBody from "./components/GeneralBody/GeneralBody";
import TextComponent from "./components/Textcomponent";

function App() {
  const [hospitals, setHospitals] = useState([]);
  const [areas, setAreas] = useState([]);
  const [socials, setSocials] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [legalization, setLegalization] = useState([]);

  function fetchHospitals() {
    fetch("http://localhost:5000/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        console.log(data);
      });
  }
  function fetchAreas() {
    fetch("http://localhost:5000/areas")
      .then((response) => response.json())
      .then((data) => {
        setAreas(data);
        console.log(data);
      });
  }
  function fetchSocials() {
    fetch("http://localhost:5000/socials_services")
      .then((response) => response.json())
      .then((data) => {
        setSocials(data);
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
  function fetchLegalization() {
    fetch("http://localhost:5000/legalization")
      .then((response) => response.json())
      .then((data) => {
        setLegalization(data);
        console.log(data);
      });
  }
  return (
    <div className="app">
      <Header
        onSocialClick={fetchSocials}
        onAreasClick={fetchAreas}
        onHospitalsClick={fetchHospitals}
        onLawyersClick={fetchLawyers}
        onLegalizationClick={fetchLegalization}
      />
      <Image />
      <TextComponent /> {/* Welcome to Barcelona */}
      <GeneralBody
        hospitals={hospitals}
        areas={areas}
        socials={socials}
        lawyers={lawyers}
        legalization={legalization}
      />
      <Footer />
    </div>
  );
}

export default App;
