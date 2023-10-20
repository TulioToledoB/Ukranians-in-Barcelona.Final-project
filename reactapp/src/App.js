import React, { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
//import TextComponent from "./components/Textcomponent"; // Importa el nuevo componente
import Footer from "./components/Footer";
import GeneralBody from "./components/GeneralBody/GeneralBody";

function App() {
  const [hospitals, setHospitals] = useState([]);
  const [areas, setAreas] = useState([]);
  const [socials_services, setSocials_services] = useState([]);
  const [lawyers, setLawyers] = useState([]);

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
        setSocials_services(data);
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
  return (
    <div className="app">
      <Header
        onSocialClick={fetchSocials}
        onAreasClick={fetchAreas}
        onHospitalsClick={fetchHospitals}
      />
      <Image />
      <GeneralBody hospitals={hospitals} />
      <Footer />
    </div>
  );
}

export default App;
