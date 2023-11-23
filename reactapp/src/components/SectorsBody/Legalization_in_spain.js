// import React, { useState, useEffect, useTransition } from "react";
// import { useTranslation } from "react-i18next";
// import i18n from "../../i18next";
// import ListBody from "./ListBodeLegalize";
// import SearchFile from "./SearchFormsSectors/SearchFormLegalize";
// import "./Sectors.css";
// import BigCardLegalize from "./SearchFormsSectors/BigCard";
// import arrowLeft from "./arrowLeftCut.png";
// import arrowRight from "./arrowRightCut.png";

// function Legalize(props) {
//   const [legalization, setLegalization] = useState([]);
//   const [selectedHospital, setSelectedHospital] = useState(null);

//   const { t, i18n } = useTranslation();

//   function fetchLegalization() {
//     fetch("http://localhost:5000/legalization")
//       .then((response) => response.json())
//       .then((data) => {
//         setLegalization(data);
//         console.log(data);
//       });
//   }
//   useEffect(() => {
//     fetchLegalization();
//   }, []);

//   const handleListItemClick = (hospital) => {
//     setSelectedHospital(hospital);
//   };

//   const handleCloseBigCard = () => {
//     setSelectedHospital(null);
//   };

//   return (
//     <div className="legalization_body">
//       <div className="title_div">
//         <img src={arrowLeft} alt="#"></img>
//         <h2 className="title_sectors">{t("title_sector_legalization")}</h2>
//         <img src={arrowRight} alt="#"></img>
//       </div>
//       <div className="allBody">
//         <div className="list">
//           <ListBody items={legalization} onItemClick={handleListItemClick} />
//         </div>
//         {selectedHospital && (
//           <div className="big-card">
//             <BigCardLegalize
//               legalization={legalization}
//               hospital={selectedHospital}
//               onClose={handleCloseBigCard}
//             />
//           </div>
//         )}
//         {!selectedHospital && (
//           <div className="searchResult">
//             <SearchFile isUserSignedIn={props.isUserSignedIn} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Legalize;

// Legalize.js

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Legalization_in_spain.css";
import "./Sectors.css";

const Legalize = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 17;

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const { t } = useTranslation();

  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="container_legalize">
      <div className="title_div">
        <h2 className="title_sectors">{t("title_sector_legalization")}</h2>
      </div>
      <div className="legalize_content">
        <div className="step-numbers">
          <div>
            {steps.map((step) => (
              <button
                key={step}
                className={`step-number ${step === activeStep ? "active" : ""}`}
                onClick={() => handleStepClick(step)}
              >
                {t("stepCard")}:{step}
              </button>
            ))}
          </div>
        </div>
        <div>
          <ul className="ul_legalize">
            {steps.map((step) => (
              <li
                key={step}
                className={`step ${step === activeStep ? "active" : ""}`}
              >
                {t(`sector_legalizatio_todo${step}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Legalize;
