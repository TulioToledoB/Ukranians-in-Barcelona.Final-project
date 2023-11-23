import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";

import "./SingleQuestion.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function FamousQuestions() {
  /// const [questions] = useState(quest);
  const { t, i18n } = useTranslation();

  return (
    <main className="faqs">
      <div className="title_div">
        <img src={arrowLeft}></img>
        <h2 className="title_sectors">{t("title_sector_questions")}</h2>
        <img src={arrowRight}></img>
      </div>
      <div className="quest-container">
        <section>
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions1`)}
            answer={t(`answersFam.frequentlyAnswer`)}
          />
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions2`)}
            answer={t(`answersFam.frequentlyAnswer2`)}
          />
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions3`)}
            answer={t(`answersFam.frequentlyAnswer3`)}
          />
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions4`)}
            answer={t(`answersFam.frequentlyAnswer4`)}
          />
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions5`)}
            answer={t(`answersFam.frequentlyAnswer5`)}
          />
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions6`)}
            answer={t(`answersFam.frequentlyAnswer6`)}
          />
          <SingleQuestion
            question={t(`questions.frequentlyAskedQuestions7`)}
            answer={t(`answersFam.frequentlyAnswer7`)}
          />
        </section>
      </div>
    </main>
  );
}

export default FamousQuestions;
