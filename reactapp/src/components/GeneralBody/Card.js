import React from "react";
import { ReactDOM } from "react";
import "/home/l0013/Desktop/MigraCode/CopyProject/Ukranians-in-Barcelona.Final-project/reactapp/src/components/GeneralBody/card.css"

function Card(data){
    return (
        <div className="card">
            <div className="card-body">
                <img src="https://wallpapers.com/images/featured/beautiful-amazing-pictures-ce8zns6vqeh8q3gh.jpg" className="card-image"/>
                <h3 className="card-title" >Title</h3>
            </div>
            <button className="card-btn"> Read</button>
        </div>
    )

}

export default Card;