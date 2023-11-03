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
      <div>
        <ListBody items={legalization} />
      </div>
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default Legalize;
