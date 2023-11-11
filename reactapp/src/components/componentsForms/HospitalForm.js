import React, { useState } from "react";
import "./HospitalForm.css";

const HospitalForm = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [contact, setContact] = useState('');
  const [areaId, setAreaId] = useState('');
  const [foto, setFoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>HOSPITAL INFO</h1>
       
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HospitalForm;
