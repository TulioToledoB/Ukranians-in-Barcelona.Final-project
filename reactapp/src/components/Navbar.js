import React, { useState } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Search from "./Search";
import "./Navbar.css";
function NavBar(props) {
  const [showDropdown, setShowDropdown] = useState(false);

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
          <Logo />
        </a>
        <Title />
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={props.onSocialClick}
              >
                Social Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.onAreasClick}>
                Legalization in Spain
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.onHospitalsClick}>
                Hospitals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.onLawyersClick}>
                Lawyers & Police
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Job Offers
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
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
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
