import React from "react";
import "./BigCard.css";

function BigCard_Events(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img src={props.event.foto} className="bigCard-image" alt="#" />
        <p>{props.event.name}</p>
        <p>{props.event.data}</p>
        <p>{props.event.data}</p>
        <a> Open in the browser</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard_Events;
