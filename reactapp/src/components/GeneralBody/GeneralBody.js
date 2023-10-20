import React from "react";
import Carousel from "./Carousel";
import "./GeneralBody.css";
import slides from "../data/carouselData.json";
import Card from "./Card";

function GeneralBody() {
  return (
    <div className="generalBody">
      <div className="carouselCard" >
        <Carousel data={slides} className="generalCarousel" />
        <div className="generalCarouselCard">
        <Card />
        <Card />
        </div>
      </div >
      <div className = "listOfCards">
        <Card className=" card generalCard"/>
        <Card className=" card generalCard"/>
        <Card className="card generalCard"/>
      </div>
    </div>
  );
}

export default GeneralBody;
