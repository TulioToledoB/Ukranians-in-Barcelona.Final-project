import React from "react";
import image from "./imgs_interface/events&holidays.jpg";
import "./Image.css";
import TextComponent from "./Textcomponent";

function Image() {
  return (
    <div className="image">
      <img src={image} alt="header section" />
      <TextComponent text={"Welcom To Barcelona"}/>
    </div>
  );
}

export default Image;
