import React, { useState } from "react";
import "./HospitalForm.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HospitalForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [contact, setContact] = useState("");
  const [areaId, setAreaId] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/hospitals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, link, contact, areaId, foto }),
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);
        alert("Succesful add info");

        navigate("/hospitals"); // You can handle success or error messages here
        // You might want to reset the form or perform other actions after a successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  return (
    <div className="hospitalForm">
      <form onSubmit={handleSubmit}>
        <h1>{t("hospitalTitleAddInfo")}</h1>

        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          id="link"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <input
          type="tel"
          id="contact"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="text"
          id="areaId"
          placeholder="Area_Id"
          value={areaId}
          onChange={(e) => setAreaId(e.target.value)}
        />

        <input
          type="text"
          id="foto"
          placeholder="Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <button type="submit">{t("buttonAdminAddInfo")}</button>
      </form>
    </div>
  );
};

export default HospitalForm;
