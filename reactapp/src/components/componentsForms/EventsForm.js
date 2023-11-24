import React, { useState } from "react";
import "./EventForm.css";
import { useNavigate } from "react-router-dom";

const EventsForm = () => {
  const [foto, setFoto] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [place, setPlace] = useState("");
  const [areaId, setAreaId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://backend-amber-three-41.vercel.app/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foto, name, data, place, areaId }),
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);
        alert("Succesful add info");

        navigate("/events"); // You can handle success or error messages here
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
        <h1>EVENTS INFO</h1>

        <input
          type="text"
          id="foto"
          placeholder="Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />

        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          id="data"
          placeholder="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          type="text"
          id="place"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <input
          type="text"
          id="areaId"
          placeholder="Area_Id"
          value={areaId}
          onChange={(e) => setAreaId(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventsForm;
