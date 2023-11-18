import React from "react";
import "./BigCard.css";
import { useTranslation } from "react-i18next";

function BigCard(props) {
  const { t } = useTranslation();
  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <img
          src={props.hospital.foto}
          width="600rem"
          height="500rem"
          className="bigCard-image"
          alt="#"
        />
        <p>
          {t("nameBigCard")}:{props.hospital.name}
        </p>
        <a href={`tel:${props.hospital.contacts}`}>{t("callLink")}</a>
        <a href={props.hospital.link}>{t("OpenWeb")}</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard;
