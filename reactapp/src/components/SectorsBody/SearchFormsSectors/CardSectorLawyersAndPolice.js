import React from "react";
import "./CardSector.css";
import { useTranslation } from "react-i18next";

function CardSectorLawyersAndPolice(props) {
  const { t } = useTranslation();
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
                width="100rem"
                height="300rem"
              />
              <p>Name: {item.name}</p>
              <p>{item.place}</p>
              {item.address ? <p>Area: {item.address}</p> : null}

              <a href={item.tel}> Call</a>
              <button className="cardSector-btn">
                {t("littleCardsButtonEvent")}
              </button>
              {props.isUserSignedIn ? (
                <button
                  onClick={() => props.handleDelete(item.id)}
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
export default CardSectorLawyersAndPolice;
