import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="questions">
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p className="answer">{answer}</p>}
    </article>
  );
};

export default SingleQuestion;
