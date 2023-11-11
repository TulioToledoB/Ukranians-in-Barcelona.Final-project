import React from "react";
import "./Title.css";

function Title({ title }) {
 

  return (<div className="title">

    <h1 className="titleWord" id="ukr">{ title }</h1>
    <h1 className="titleWord"> { title } </h1>
    <h1 className="titleWord" id="bcn"> { title }</h1>

  </div>

  ) 

}

export default Title;
