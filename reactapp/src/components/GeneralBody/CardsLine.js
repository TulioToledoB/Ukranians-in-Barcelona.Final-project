import React from "react";
import { ReactDOM } from "react";
import "./CardsLine.css"

function CardsLine(data){
    return (
        <div className="cardLine">
            <div className="cardLine-body">
                <img src="https://wallpapers.com/images/featured/beautiful-amazing-pictures-ce8zns6vqeh8q3gh.jpg" className="cardLine-image"/>
                <h3 className="cardLine-title" >Title</h3>
            </div>
            <button className="cardLine-btn"> Read</button>
        </div>
    )

}

export default CardsLine;