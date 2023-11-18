import React, { useState } from "react";
import "./LawyersForm.css";
import { useNavigate } from "react-router-dom";

const LawyersForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [areaId, setAreaId] = useState("");
  const [specification, setSpecification] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/lawyers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, contact, areaId, specification, foto }),
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);
        alert("Succesful add info");

        navigate("/lawyers_police");
        // Handle error // You can handle success or error messages here
        // You might want to reset the form or perform other actions after a successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LAWYERS INFO</h1>

        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          id="contact"
          placeholder="Contact_info"
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
          id="specification"
          placeholder="Specification"
          value={specification}
          onChange={(e) => setSpecification(e.target.value)}
        />

        <input
          type="text"
          id="foto"
          placeholder="Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LawyersForm;
