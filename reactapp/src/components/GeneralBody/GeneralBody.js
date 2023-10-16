import React from "react";
import Carousel from "./Carousel";
import "/home/l0013/Desktop/MigraCode/CopyProject/Ukranians-in-Barcelona.Final-project/reactapp/src/components/GeneralBody/GeneralBody.css"
import slides from "/home/l0013/Desktop/MigraCode/CopyProject/Ukranians-in-Barcelona.Final-project/reactapp/src/components/data/carouselData.json"
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