import React, { useState } from "react";
import "./JobForm.css";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const [city, setCity] = useState("");
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://backend-amber-three-41.vercel.app/job_offers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city, link, name, foto }),
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);
        alert("Succesful add info");

        navigate("/job_offers"); // You can handle success or error messages here
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
        <h1>JOB_LINKS</h1>

        <input
          type="text"
          id="city"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          id="foto"
          placeholder="foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobForm;
