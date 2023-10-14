import React from 'react';
import image from './parkguel.png'; 
import "./Image.css";

function Image() {
  return (
    <div className="image">
      <img src={image} alt="header section" />
    </div>
  );
}

export default Image;
