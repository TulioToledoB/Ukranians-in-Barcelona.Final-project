import React from "react";
import "./CardSector.css";
function CardSectorLawyers(props) {
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
                width="200rem"
                height="100%"
              />
              <p>Name: {item.name}</p>
              <p>{item.contact_info}</p>
              <p> {item.specification}</p>
              <button className="cardSector-btn"> Read</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorLawyers;