import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img
          src={props.hospital.foto}
          width="100%"
          className="bigCard-image"
          alt="#"
        />
        <p>{props.hospital.name}</p>
        <p>{props.hospital.contacts}</p>
        <a href={props.hospital.link}>Go to the web!</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard;
