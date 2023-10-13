import { response } from "express";
import React, { useEffect, useState } from "react";

function App() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        console.log(data);
      });
  }, []);

  return <div></div>;
}

export default App;
