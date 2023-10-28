import React, { useState, useEffect } from "react";

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
      {hospitals.map((hospital) => (
        <div>
          <h2>{hospital.name}</h2>
          {hospital.link}
          {hospital.address}
        </div>
      ))}
    </div>
  );
}

export default Hospitals;
