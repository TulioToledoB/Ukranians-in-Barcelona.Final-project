import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import questions from "./quest";
import "./SingleQuestion.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

function FamousQuestions() {
  /// const [questions] = useState(quest);
  const { t, i18n } = useTranslation();

  return (
    <main className="faqs">
      <div className="quest-container">
        <h3>{t("title_sector_questions")}</h3>
        <section>
          {questions.map((question) => (
            <SingleQuestion
              key={question.id}
              question={[
                t(`questions.frequentlyAskedQuestions1`),
                t(`questions.frequentlyAskedQuestions2`),
                t(`questions.frequentlyAskedQuestions3`),
                t(`questions.frequentlyAskedQuestions4`),
                t(`questions.frequentlyAskedQuestions5`),
                t(`questions.frequentlyAskedQuestions6`),
                t(`questions.frequentlyAskedQuestions7`),
              ]}
              answer={[
                t(`answersFam.frequentlyAnswer`),
                t(`answersFam.frequentlyAnswer2`),
                t(`answersFam.frequentlyAnswer3`),
                t(`answersFam.frequentlyAnswer4`),
                t(`answersFam.frequentlyAnswer5`),
                t(`answersFam.frequentlyAnswer6`),
                t(`answersFam.frequentlyAnswer7`),
              ]}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default FamousQuestions;
