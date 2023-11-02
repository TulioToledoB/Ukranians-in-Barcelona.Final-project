import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchForm";
import "./PoliceAndLawyers.css"; // Asegurándonos de importar el CSS correcto

function PoliceAndLawyers() {
  const [lawyers, setLawyers] = useState([]);
  const [police, setPolice] = useState([]);

  function fetchLawyers() {
    fetch("http://localhost:5000/lawyers")
      .then((response) => response.json())
      .then((data) => {
        setLawyers(data);
        console.log(data);
      });
  }
  function fetchPolice() {
    fetch("http://localhost:5000/lawyers")
      .then((response) => response.json())
      .then((data) => {
        setPolice(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchLawyers();
  }, []);
  useEffect(() => {
    fetchPolice();
  }, []);

  return (
    <div className="police_lawyers_body"> {/* Modificando el nombre de la clase */}
      <h2>Lawyers</h2>
      <ListBody items={lawyers} />
      <h2>Police</h2>
      <ListBody items={police} />
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default PoliceAndLawyers;
