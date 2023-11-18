import React from "react";
import "./CardSector.css";
import { useTranslation } from "react-i18next";

function CardSectorEvents(props) {
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
                width="100rem"
                height="300rem"
                alt="#"
              />
              <p>
                {t("nameBigCard")}:{item.name}
              </p>
              <p>
                {t("dateCards")}
                {item.data}
              </p>
              <a href={item.place}> Open the hospitals website</a>
              <button className="cardSector-btn"> Read</button>
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
export default CardSectorEvents;
