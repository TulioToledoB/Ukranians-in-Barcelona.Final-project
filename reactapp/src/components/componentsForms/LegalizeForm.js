import React, { useState } from "react";
import "./LegalizeForm.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LegalizeForm = () => {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://backend-amber-three-41.vercel.app/legalization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, todo, foto }),
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);

        alert("Succesful add info");

        navigate("/legalize"); // You can handle success or error messages here
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
        <h1>Legalization form</h1>

        <input
          type="number"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          id="todo"
          placeholder="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
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

export default LegalizeForm;
