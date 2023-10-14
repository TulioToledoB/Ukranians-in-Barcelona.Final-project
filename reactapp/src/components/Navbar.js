import React, { useState } from 'react';
import "./Navbar.css"

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Social services</a></li>
        <li><a href="#">Legalization in Spain</a></li>
        <li><a href="#">Hospitals</a></li>
        <li><a href="#">Abogads & Policy</a></li>
        <li><a href="#">Job offers</a></li>
        <li
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Others</a>
          {showDropdown && (
            <ul className="dropdown active">
              <li><a href="#">Question famouse</a></li>
              <li><a href="#">Abaut As</a></li>
              <li><a href="#">Events & holidays</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
