import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img src={props.foto} className="bigCard-image" alt="#" />
        <p>{props.name}</p>
        <p>{props.addres}</p>
        <a> {props.tel}Open in the browser</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard;
