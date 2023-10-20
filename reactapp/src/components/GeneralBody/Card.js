import React from "react";
import { ReactDOM } from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body" key={props.element.id}>
        <img src={props.element.foto} width="50px" className="card-image" />
        <h3 className="card-title">{props.element.name_event}</h3>
      </div>
      <button className="card-btn"> Read</button>
    </div>
  );
}

export default Card;
