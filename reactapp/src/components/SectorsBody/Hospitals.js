import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";

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
    <div>
      <ListBody items={hospitals} />
    </div>
  );
}

export default Hospitals;
