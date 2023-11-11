import React from "react";
import "./BigCard.css";

function BigCardLegalize(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img src={"../aboutus.jpg"} className="bigCard-image" alt="#" />
        <p>{props.legalization.name}</p>
        <p>{props.legalization.todo}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCardLegalize;
