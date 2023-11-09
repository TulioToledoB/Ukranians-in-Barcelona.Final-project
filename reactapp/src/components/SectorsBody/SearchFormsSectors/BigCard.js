import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img src={"../aboutus.jpg"} className="bigCard-image" alt="#" />
        <p>{props.hospital.name}</p>
        <p>Infooo</p>
        <a> Open in the browser</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard;
