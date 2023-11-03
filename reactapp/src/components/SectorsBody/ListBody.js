import React from "react";
import "./ListBody.css";

function ListBody(props) {
  return (
    <div className="list-container">
      {props.items.map((item, index) => (
        <div key={index} className="list-item">
          <div className="list-text">{item.name_hospitals}</div>
        </div>
      ))}
    </div>
  );
}
export default ListBody;
