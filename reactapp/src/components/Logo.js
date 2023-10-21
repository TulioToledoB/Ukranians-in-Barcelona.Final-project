import React from 'react'
import "./Logo.css";
import logoapp from "./unnamed-removebg-preview.png"

function Logo() {
  return (
    <div className="logo">
      <img src={logoapp} alt="Log" />
    </div>
  );
}

export default Logo;
