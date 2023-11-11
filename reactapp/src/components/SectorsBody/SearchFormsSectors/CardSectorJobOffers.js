import React from "react";
import "./CardSector.css";
function CardSectorJobOffers(props) {
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
              <p>{item.city}</p>
              <a href={item.link}>
                <button className="cardSector-btn">Go to the web!</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorJobOffers;
