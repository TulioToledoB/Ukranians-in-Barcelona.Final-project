import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormLawyersAndPolice";
import "./Sectors.css";

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
    <div className="police_lawyers_body">
      <div className="title_div">
        <h2 className="title_sectors">Lawyers and Police</h2>
      </div>
      <div className="allBody">
        <div>
          <ListBody items={lawyers} />
          <ListBody items={police} />
        </div>
        <div className="searchResult">
          <SearchFile />
        </div>
      </div>
    </div>
  );
}

export default PoliceAndLawyers;
