import React from "react";
import "./CardSector.css";
function CardSectorSocialServices(props) {
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
              <p>Name: {item.name}</p>
              <p>{item.link}</p>
              <p>Area: {item.address}</p>
              <a href={item.contacts}> Open the Social Service website</a>
              <button className="cardSector-btn"> Read</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorSocialServices;
