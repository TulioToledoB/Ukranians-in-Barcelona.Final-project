import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormLegalize";
import "./Sectors.css";

function Legalize() {
  const [legalization, setLegalization] = useState([]);

  function fetchLegalization() {
    fetch("http://localhost:5000/legalization")
      .then((response) => response.json())
      .then((data) => {
        setLegalization(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchLegalization();
  }, []);

  return (
    <div className="legalization_body">
      <div className="title_div">
        <h2 className="title_sectors">Legalization in Spain</h2>
      </div>
      <div className="allBody">
        <div>
          <ListBody items={legalization} />
        </div>
        <div className="searchResult">
          <SearchFile />
        </div>
      </div>
    </div>
  );
}

export default Legalize;
