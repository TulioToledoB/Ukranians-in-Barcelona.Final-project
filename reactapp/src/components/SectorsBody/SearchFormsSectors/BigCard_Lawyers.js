import React from "react";
import "./BigCard.css";

function BigCard_Lawyers(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
      <img src={"../aboutus.jpg"} className="bigCard-image" alt="#" />
        <p>{props.lawyer.name}</p>
        <p>{props.lawyer.contact_info}</p>
        <p>{props.lawyer.specification}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard_Lawyers;
