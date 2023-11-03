import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormHospitals";
import "./Sectors.css";
import BigCard from "./SearchFormsSectors/BigCard";

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  function fetchHospitals() {
    fetch("http://localhost:5000/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
      });
  }
  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <div className="hospitals_body">
      <div className="title_div">
      <h2 className="title_sectors">Hospitals</h2>
      </div>
      <div className="allBody">
      <div>
        <ListBody items={hospitals} />
      </div>
      <div className="searchResult">
        <SearchFile />
      </div>
      </div>
    </div>
  );
}

export default Hospitals;
