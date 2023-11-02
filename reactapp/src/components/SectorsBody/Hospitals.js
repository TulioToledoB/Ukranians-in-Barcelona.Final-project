import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchForm";
import "./Hospitals.css"; // Asegurándonos de importar el CSS correcto

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  function fetchHospitals() {
    fetch("http://localhost:5000/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div className="hospitals_body"> {/* Modificando el nombre de la clase */}
      <div>
        <ListBody items={hospitals} />
      </div>
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default Hospitals;
