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
                <h5>{t("nameBigCard")}:</h5> {item.name}
              </p>
              <p>
                <h5>{t("dateCards")}:</h5>
                {item.data}
              </p>
              <a href={item.place}> {t("OpenWeb")}</a>
              <button className="cardSector-btn">
                {" "}
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
export default CardSectorEvents;
