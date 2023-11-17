import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
import FamousQuestions from "./components/SectorsBody/FamousQuestions";
import AboutUs from "./components/SectorsBody/AboutUs";
import Jobs from "./components/SectorsBody/JobOffers";
import Events from "./components/SectorsBody/Events";
import PoliceAndLawyers from "./components/SectorsBody/PoliceAndLawyers";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HospitalForm from "./components/componentsForms/HospitalForm";
// import eng from "../public/locales/eng/eng.json";
// import es from "../public/locales/es/es.json";
// import ua from "../public/locales/ua/ua.json";

function App() {
  const { t, i18n } = useTranslation();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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

  return (
    <div className="app">
      <Header
        onAreasClick={fetchAreas}
        t={t}
        i18n={i18n}
        translations={
          {
            // eng: eng,
            // es: es,
            // ua: ua,
          }
        }
        isUserSignedIn={isUserSignedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Image t={t} i18n={i18n} />

              <GeneralBody
                areas={areas}
                lawyers={lawyers}
                police={police}
                t={t}
                i18n={i18n}
              />
            </>
          }
        />
        <Route path="/social_services" Component={SocialServices} />
        <Route path="/legalize" Component={Legalize} />
        <Route
          path="/hospitals"
          element={<Hospitals isUserSignedIn={isUserSignedIn} />}
        />
        <Route path="/lawyers_police" Component={PoliceAndLawyers} />
        <Route path="/job_offers" Component={Jobs} />
        <Route path="/questions_famouses" Component={FamousQuestions} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/events" Component={Events} />

        <Route path="/signUpForm" Component={SignUpForm} />
        <Route
          path="/signInForm"
          element={<SignInForm setIsUserSignedIn={setIsUserSignedIn} />}
        />
        <Route path="/hospitalForm" Component={HospitalForm} />
        <Route path="/signUpForm" Component={SignUpForm} />
      </Routes>
      <Footer t={t} i18n={i18n} />
    </div>
  );
}

export default App;
