import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import quest from "./quest";
import "./SingleQuestion.css"
function FamousQuestions() {
   const [questions] = useState(quest);
  return (
    <main className="faqs">
      <div className="quest-container">
        <h3>FREQUENTLY ASKED QUESTIONS</h3>
        <section>
          {questions.map((question) => {
            return (
            <SingleQuestion key={question.id} {...question} />
            )
          })}
        </section>
      </div>
    </main>
  )
};
export default FamousQuestions;