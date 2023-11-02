import React from "react";
import "./CardSector.css";
function CardSectorEvents(props) {
  return (
    <div className="allCards">
      {props.items.map((item, index) => {
        return (
          <div className="cardSector">
            <div className="cardSector-body" key={index}>
              <img
                src={item.foto}
                className="cardSector-image"
                width="50px"
                alt="#"
              />
              <p>{item.name}</p>
              <p>Area: {item.data}</p>
              <a href={item.place}> Open the hospitals website</a>
              <button className="cardSector-btn"> Read</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorEvents;
