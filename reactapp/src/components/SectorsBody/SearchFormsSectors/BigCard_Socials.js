import React from "react";
import "./BigCard.css";

function BigCard_Socials(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img src={props.social.foto} className="bigCard-image" alt="#" />
        <p>{props.social.name}</p>
        <p>{props.social.contact}</p>
        <p>{props.social.address}</p>
        <a href={props.social.link}>Open in the browser</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard_Socials;
