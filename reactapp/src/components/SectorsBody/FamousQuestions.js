// import React, { useState } from "react";
// import SingleQuestion from "./SingleQuestion";

// import "./SingleQuestion.css";
// import { useTranslation } from "react-i18next";
// import i18n from "../../i18next";

// function FamousQuestions() {
//   /// const [questions] = useState(quest);
//   const { t, i18n } = useTranslation();

//   return (
//     <main className="faqs">
//       <div className="quest-container">
//         <h3>{t("title_sector_questions")}</h3>
//         <section>
//           {Array.from(Array(7).keys()).map((index) => (
//             <SingleQuestion
//               key={index}
//               question={[
//                 t(`questions.frequentlyAskedQuestions`),

//                 t(`questions.frequentlyAskedQuestions2`),
//                 t(`questions.frequentlyAskedQuestions3`),
//                 t(`questions.frequentlyAskedQuestions4`),
//                 t(`questions.frequentlyAskedQuestions5`),
//                 t(`questions.frequentlyAskedQuestions6`),
//                 t(`questions.frequentlyAskedQuestions7`),
//               ]}
//               answer={[
//                 t(`answersFam.frequentlyAnswer`),
//                 t(`answersFam.frequentlyAnswer2`),
//                 t(`answersFam.frequentlyAnswer3`),
//                 t(`answersFam.frequentlyAnswer4`),
//                 t(`answersFam.frequentlyAnswer5`),
//                 t(`answersFam.frequentlyAnswer6`),
//                 t(`answersFam.frequentlyAnswer7`),
//               ]}
//             />
//           ))}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default FamousQuestions;


import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import quest from "./quest";
import "./SingleQuestion.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function FamousQuestions() {
  const [questions] = useState(quest);
  const { t, i18n } = useTranslation();
  return (
    <main className="faqs">
      <div className="title_div">
        <img src={arrowLeft}></img>
      <h3 className="title_sectors">{t("title_sector_questions")}</h3>
      <img src={arrowRight}></img>
      </div>
      <div className="quest-container">
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default FamousQuestions;