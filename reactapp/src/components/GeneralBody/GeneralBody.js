import React from "react";
import Carousel from "./Carousel";
import "reactapp/src/components/GeneralBody/GeneralBody.css"
import slides from "reactapp/src/components/data/carouselData.json"
import Card from "./Card";


function GeneralBody() {
    return <div className="generalBody">
        <div className="card-column">
            <Card />
            <Card />
        </div>
        <Carousel data = {slides}/>
        <div className="card-column">
            <Card />
            <Card />
        </div>
    </div>
}

export default GeneralBody;