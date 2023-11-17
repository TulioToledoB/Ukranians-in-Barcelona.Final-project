import React from "react";
import "./AboutUs.css";
import { useTransition } from "react";
import i18n from "../../i18next";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t, i18n } = useTranslation();

  return (
    <div className="aboutUs-container">
      <div className="text-section">
        <h2>{t("History_or_Mission_title")}:</h2>
        <p>{t("History_or_Mission")}</p>
      </div>
      <div className="text-section">
        <h2>{t("equipment_title")}:</h2>
        <p>{t("equipment")}</p>
      </div>
      <div className="text-section">
        <h2>{t("Values_title")}</h2>
        <p>{t("Values")}</p>
      </div>
      <div className="text-section">
        <h2>{t("Future_and_Objectives_title")}:</h2>
        <p>{t("Future_and_Objectives")}</p>
      </div>
      <div className="text-section">
        <h2>{t("Call_to_Action_title")}:</h2>
        <p>
          <span>{t("Call_to_Action")}</span>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
