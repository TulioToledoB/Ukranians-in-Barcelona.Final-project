import React, { useState } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Search from "./Search";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
        <Link to="/" className="navbar-brand" href="#">
          <Logo />
        </Link>
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
              <Link
                to="/social_services"
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={props.onSocialClick}
              >
                Social Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/legalize"
                className="nav-link"
                href="#"
                ///onClick={props.onLegalizationClick}
              >
                Legalization in Spain
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/hospitals"
                className="nav-link"
                href="#"
                ///onClick={props.onHospitalsClick}
              >
                Hospitals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/lawyers_police"
                className="nav-link"
                href="#"
                ///onClick={props.onLawyersClick && props.onPoliceClick}
              >
                Lawyers & Police
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/job_offers" className="nav-link" href="#">
                Job Offers
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Others
              </Link>
              {showDropdown && (
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/questions_famouses"
                      className="dropdown-item"
                      href="#"
                    >
                      Question famouse
                    </Link>
                  </li>
                  <li>
                    <Link to="/about_us" className="dropdown-item" href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="dropdown-item" href="#">
                      Event & holidays
                    </Link>
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
