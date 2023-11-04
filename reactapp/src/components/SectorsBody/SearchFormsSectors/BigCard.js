import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img
          src="https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2018/11/09111333/Hospital_de_la_Santa_Creu_i_Sant_Pau_16-05-2009_13-33-12.jpg"
          className="bigCard-image"
          alt="#"
        />
        <p>Name:</p>
        <p>Contacts: tel.......</p>
        <p>Area: 1</p>
        <a> Open in the browser</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard;
