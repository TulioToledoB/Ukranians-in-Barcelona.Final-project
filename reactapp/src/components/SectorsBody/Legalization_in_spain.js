
import React, { useState } from "react";
import OneStep from "./OneStep";
import "./Legalization_in_spain.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function Legalize() {
  /// const [questions] = useState(quest);
  const { t, i18n } = useTranslation();

  return (
    <main className="faqsLegalization">
      <div className="title_div">
        <img src={arrowLeft}></img>
        <h2 className="title_sectors">{t("title_sector_legalization")}</h2>
        <img src={arrowRight}></img>
      </div>
      <div className="quest-container">
        <section>
          <OneStep
            step={t("step1")}
            todo={t("sector_legalizatio_todo1")}
          />
          <OneStep
            step={t("step2")}
            todo={t("sector_legalizatio_todo2")}
          />
          <OneStep
            step={t("step3")}
            todo={t("sector_legalizatio_todo3")}
          />
          <OneStep
            step={t("step4")}
            todo={t("sector_legalizatio_todo4")}
          />
          <OneStep
            step={t("step5")}
            todo={t("sector_legalizatio_todo5")}
          />
          <OneStep
            step={t("step6")}
            todo={t("sector_legalizatio_todo6")}
          />
          <OneStep
            step={t("step7")}
            todo={t("sector_legalizatio_todo7")}
          />
          <OneStep
            step={t("step8")}
            todo={t("sector_legalizatio_todo8")}
          />
          <OneStep
            step={t("step9")}
            todo={t("sector_legalizatio_todo9")}
          />
          <OneStep
            step={t("step10")}
            todo={t("sector_legalizatio_todo10")}
          />
          <OneStep
            step={t("step11")}
            todo={t("sector_legalizatio_todo11")}
          />
          <OneStep
            step={t("step12")}
            todo={t("sector_legalizatio_todo12")}
          />
          <OneStep
            step={t("step13")}
            todo={t("sector_legalizatio_todo13")}
          />
          <OneStep
            step={t("step14")}
            todo={t("sector_legalizatio_todo14")}
          />
          <OneStep
            step={t("step15")}
            todo={t("sector_legalizatio_todo15")}
          />
          <OneStep
            step={t("step16")}
            todo={t("sector_legalizatio_todo16")}
          />
          <OneStep
            step={t("step17")}
            todo={t("sector_legalizatio_todo17")}
          />
      
        </section>
      </div>
    </main>
  );
}

export default Legalize;



// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import "./Legalization_in_spain.css";
// import "./Sectors.css";

// const Legalize = () => {
// };

// export default Legalize;

// const [activeStep, setActiveStep] = useState(0);
// const totalSteps = 17;

// const handleStepClick = (step) => {
//   setActiveStep(step);
// };

// const { t } = useTranslation();

// const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

// return (
//   <div className="container_legalize">
//     <div className="title_div">
//       <h2 className="title_sectors">{t("title_sector_legalization")}</h2>
//     </div>
//     <div className="legalize_content">
//       <div className="step-numbers">
//         <div>
//           {steps.map((step) => (
//             <button
//               key={step}
//               className={`step-number ${step === activeStep ? "active" : ""}`}
//               onClick={() => handleStepClick(step)}
//             >
//               {t("stepCard")}:{step}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div>
//         <ul className="ul_legalize">
//           {steps.map((step) => (
//             <li
//               key={step}
//               className={`step ${step === activeStep ? "active" : ""}`}
//             >
//               {t(`sector_legalizatio_todo${step}`)}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// );