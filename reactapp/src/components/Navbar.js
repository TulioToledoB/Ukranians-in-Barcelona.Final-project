import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import Title from "./Title";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import i18n from "../i18next";

function NavBar(props) {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    console.log("Changing language to", language);
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="logoTitle">
          <Link to="/" className="navbar-brand" href="#">
            <Logo />
          </Link>

          <Title
            title1={t("nameOfSite1")}
            title2={t("nameOfSite2")}
            title3={t("nameOfSite3")}
          />
        </div>

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
                {t("socials")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/legalize" className="nav-link" href="#">
                {t("legalization")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hospitals" className="nav-link" href="#">
                {i18n.t("hospitals")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lawyers_police" className="nav-link" href="#">
                {t("lawyers")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/job_offers" className="nav-link" href="#">
                {t("jobs")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/questions_famouses" className="nav-link" href="#">
                {t("questions")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about_us" className="nav-link" href="#">
                {t("aboutUs")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link" href="#">
                {t("event")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="signInUp">
          <li className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="language-dropdown"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("eng")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("es")}>
                  Español
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("ua")}>
                  Українська
                </Dropdown.Item>
                {/* Add more language options as needed */}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <Link to="/signInForm" className="nav-link">
            <button className="signInBtn">{t("signIn")}</button>
          </Link>
          <Link to="/signUpForm" className="nav-link">
            <button className="signUpBtn">{t("signUp")}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
