import React from "react";
import Carousel from "./Carousel";
import "./GeneralBody.css";
import slides from "../data/carouselData.json";
import Card from "./Card";

function GeneralBody() {
  return (
    <div className="generalBody">
      <div className="card-column">
        <Card />
        <Card />
      </div>
      <Carousel data={slides} />
      <div className="card-column">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default GeneralBody;
