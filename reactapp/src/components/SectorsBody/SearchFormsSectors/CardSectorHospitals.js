import React from "react";
import "./CardSector.css";
import { useTranslation } from "react-i18next";

function CardSectorHospitals(props) {
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
              <a href={`tel:${item.contacts}`}>{t("callLink")}</a>

              <a href={item.link}>{t("OpenWeb")}</a>
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
export default CardSectorHospitals;
