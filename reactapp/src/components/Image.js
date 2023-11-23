import React from "react";
import image from "./bcn.jpg"
import TextComponent from "./Textcomponent";
import imageBg from "./black-screen_39.png"
import  "./Image.css"

function Image({ t, i18n }) {
  return (
    <div className="image">
      <img className="mainImg" src={image} alt="header section" />
      <img className="imageBg" src= {imageBg}></img>
      <TextComponent text={t("titleImage")} />
    </div>
  );
}

export default Image;
