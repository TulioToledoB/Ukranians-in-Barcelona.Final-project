import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import "./Navbar.css";
import { Link } from "react-router-dom";
function NavBar(props) {
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
              <Link to="/legalize" className="nav-link" href="#">
                Legalization in Spain
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hospitals" className="nav-link" href="#">
                Hospitals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lawyers_police" className="nav-link" href="#">
                Lawyers & Police
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/job_offers" className="nav-link" href="#">
                Job Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/questions_famouses" className="nav-link" href="#">
                Question famouse
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about_us" className="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link" href="#">
                Event & holidays
              </Link>

            </li>
            <Link to="/signInForm" className="nav-link">
              <button className="signInBtn">Sign In</button>
           </Link>
            <Link to="/signUpForm" className="nav-link">
            <button className="signUpBtn">Sign Up</button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
