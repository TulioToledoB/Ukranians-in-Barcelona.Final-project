import React from "react";
import "./CardSector.css";

function CardSectorLegalize(props) {
  return (
    <div className="allCards">
      {props.items.map((item, index) => {
        return (
          <div className="cardSector">
            <div className="cardSector-body" key={index}>
              <img src={item.foto} className="cardSector-image" alt="#" />
              <p>Step: {item.name}</p>
              <p>{item.todo}</p>
              {props.isUserSignedIn ? (
                <button
                  onClick={() => props.handleDelete(item.name)}
                  className="cardSector-btn"
                >
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CardSectorLegalize;
