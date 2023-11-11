import React from "react";
import "./Title.css";

function Title({ title1, title2, title3 }) {
  return (
    <div className="title">
      <h1 className="titleWord" id="ukr">
        {title1}
      </h1>
      <h1 className="titleWord"> {title2} </h1>
      <h1 className="titleWord" id="bcn">
        {" "}
        {title3}
      </h1>
    </div>
  );
}

export default Title;
