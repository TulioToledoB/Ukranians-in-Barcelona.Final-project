import React from "react";
import image from "./imgs_interface/events&holidays.jpg";
import "./Image.css";
import TextComponent from "./Textcomponent";

function Image({ t, i18n }) {
  return (
    <div className="image">
      <img src={image} alt="header section" />
      <TextComponent text={t("titleImage")} />
    </div>
  );
}

export default Image;
