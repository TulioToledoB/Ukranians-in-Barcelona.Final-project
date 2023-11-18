import React from "react";
import "./CardSector.css";
import { useTranslation } from "react-i18next";

function CardSectorJobOffers(props) {
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
              <p>
                {t("nameBigCard")}: {item.name}
              </p>
              <p>
                {t("cityCard")}
                {item.city}
              </p>
              <a href={item.link}>
                <button className="cardSector-btn">{t("OpenWeb")}</button>
              </a>
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
export default CardSectorJobOffers;
