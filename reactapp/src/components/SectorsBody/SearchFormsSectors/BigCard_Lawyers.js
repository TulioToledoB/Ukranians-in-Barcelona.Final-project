import React from "react";
import "./BigCard.css";

function BigCard_Lawyers(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img
          src={props.lawyer.foto}
          className="bigCard-image"
          alt="#"
          width="100%"
          height="400rem"
        />
        <p>{props.lawyer.name}</p>
        <p>{props.lawyer.place}</p>
        <p>{props.lawyer.address}</p>

        <p>{props.lawyer.contact_info}</p>
        <p>{props.lawyer.specification}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard_Lawyers;
