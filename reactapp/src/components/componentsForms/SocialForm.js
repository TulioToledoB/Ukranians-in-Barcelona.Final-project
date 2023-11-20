import React, { useState } from "react";
import "./SocialForm.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SocialForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContact] = useState("");
  const [areaId, setAreaId] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/socials_services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, link, address, contacts, areaId, foto }),
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);
        alert("Succesful add info");

        navigate("/social_services");

        // You can handle success or error messages here
        // You might want to reset the form or perform other actions after a successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  return (
    <div className="bodyIn">
      <form onSubmit={handleSubmit}>
        <h1>{t("socialsTitleAddInfo")}</h1>

        <input
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          id="link"
          placeholder="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <input
          type="text"
          id="address"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          id="contacts"
          placeholder="contacts"
          value={contacts}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="text"
          id="areaId"
          placeholder="area_id"
          value={areaId}
          onChange={(e) => setAreaId(e.target.value)}
        />

        <input
          type="text"
          id="foto"
          placeholder="foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <button type="submit">{t("buttonAdminAddInfo")}</button>
      </form>
    </div>
  );
};

export default SocialForm;
