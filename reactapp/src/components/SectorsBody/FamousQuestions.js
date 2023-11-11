import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import quest from "./quest";
import "./SingleQuestion.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

function FamousQuestions() {
  const [questions] = useState(quest);
  const { t, i18n } = useTranslation();
  return (
    <main className="faqs">
      <div className="quest-container">
        <h3>{t("title_sector_questions")}</h3>
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
