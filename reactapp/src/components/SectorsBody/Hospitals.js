import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormHospitals";
import "./Sectors.css";

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
    <div className="hospitals_body">
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
