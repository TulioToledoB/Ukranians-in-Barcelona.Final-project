import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const OneStep = ({ step, todo }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="questions">
      <header>
        <h4>{step}</h4>
        <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p className="answer">{todo}</p>}
    </article>
  );
};

export default OneStep;
