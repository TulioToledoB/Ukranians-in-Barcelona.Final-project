import React from "react";
import "./CardSector.css";

function CardSectorHospitals(props) {
  return (
    <div className="allCards">
      {props.items.map((item, index) => {
        return (
          <div className="cardSector">
            <div className="cardSector-body" key={index}>
              <img
                src={item.foto}
                className="cardSector-image"
                alt="#"
                width="50%"
                height="200rem"
              />
              <p>Name: {item.name}</p>
              <p>{item.contacts}</p>

              <a href={item.link}> Open the hospitals website</a>
              <button className="cardSector-btn"> Read</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorHospitals;
