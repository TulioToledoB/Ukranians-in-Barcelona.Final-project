import React, { useState } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Search from "./Search";
import "./Navbar.css";
function NavBar(){
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
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Logo/>
            </a>
            <Title/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={fetchSocials}>
                    Social Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={fetchAreas}>
                    Legalization in Spain
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={fetchHospitals}>
                    Hospitals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={fetchLawyers}>
                    Lawyers & Police
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Job Offers
                  </a>
                </li>
                <li className="nav-item dropdown" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Others
                  </a>
                  {showDropdown && (
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                    <li>
                      <a className="dropdown-item" href="#">
                        Question famouse
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Event & holidays
                      </a>
                    </li>
                  </ul>
                  )}
                </li>
              </ul>
            <Search/>
            </div>
          </div>
        </nav>
      );
    };

export default NavBar;