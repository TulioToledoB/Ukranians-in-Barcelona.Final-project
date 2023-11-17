import React from "react";
import "./CardSector.css";
function CardSectorLawyersAndPolice(props) {
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
              <p>{item.place}</p>
              <p>Area: {item.address}</p>
              <a href={item.tel}> Call</a>
              <button className="cardSector-btn"> Read</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorLawyersAndPolice;
