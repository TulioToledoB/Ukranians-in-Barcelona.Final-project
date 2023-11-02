import React from "react";
import "./CardSector.css";
function CardSectorLegalize(props) {
  return (
    <div className="allCards">
      {props.items.map((item, index) => {
        return (
          <div className="cardSector">
            <div className="cardSector-body" key={index}>
              <img
                src="https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2018/11/09111333/Hospital_de_la_Santa_Creu_i_Sant_Pau_16-05-2009_13-33-12.jpg"
                className="cardSector-image"
                alt="#"
              />
              <p>Step: {item.name}</p>
              <p>{item.todo}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorLegalize;
