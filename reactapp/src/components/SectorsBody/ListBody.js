import React from "react";
import "./ListBody.css";
import { useTranslation } from "react-i18next";

function ListBody(props) {
  const { t } = useTranslation();

  return (
    <div className="list-container">
      {props.items.map((item, index) => (
        <div key={index} className="list-item">
          <div className="list-text" onClick={() => props.onItemClick(item)}>
            {t("nameBigCard")}:{item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListBody;
