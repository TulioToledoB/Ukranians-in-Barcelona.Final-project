import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [areas, setAreas] = useState([]);
  const [socials_services, setSocials_services] = useState([]);
  const [lawyers, setLawyers] = useState([]);

  function fetchHospitals() {
    fetch("http://localhost:5000/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        console.log(data);
      });
  }
  function fetchAreas() {
    fetch("http://localhost:5000/areas")
      .then((response) => response.json())
      .then((data) => {
        setAreas(data);
        console.log(data);
      });
  }
  function fetchSocials() {
    fetch("http://localhost:5000/socials_services")
      .then((response) => response.json())
      .then((data) => {
        setSocials_services(data);
        console.log(data);
      });
  }
  function fetchLawyers() {
    fetch("http://localhost:5000/lawyers")
      .then((response) => response.json())
      .then((data) => {
        setLawyers(data);
        console.log(data);
      });
  }

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#" onClick={fetchSocials}>
            Social services
          </a>
        </li>
        <li>
          <a href="#" onClick={fetchAreas}>
            Legalization in Spain
          </a>
        </li>
        <li>
          <a href="#" onClick={fetchHospitals}>
            Hospitals
          </a>
        </li>
        <li>
          <a href="#" onClick={fetchLawyers}>
            Abogads & Policy
          </a>
        </li>
        <li>
          <a href="#">Job offers</a>
        </li>
        <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <a href="#">Others</a>
          {showDropdown && (
            <ul
              className="dropdown active"
              style={{ display: 'block', position: 'absolute' }}
            >
              <li>
                <a href="#">Question famouse</a>
              </li>
              <li>
                <a href="#">Abaut As</a>
              </li>
              <li>
                <a href="#">Events & holidays</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
