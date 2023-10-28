import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";

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
    <div>
      <ListBody items={legalization} />
    </div>
  );
}

export default Legalize;
