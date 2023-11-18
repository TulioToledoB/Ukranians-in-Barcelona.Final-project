import React, { useEffect, useState } from "react";
import CardSectorPolice from "./CardSectorPolice";
import CardSectorLawyers from "./CardSectroLawyers";
import axios from "axios";
function SearchFile() {
  const [query, setQuery] = useState("");
  const [dataPolice, setDataPolice] = useState([]);

  // const [dataLaw, setDataLaw] = useState([]);

  const searchPolice = () => {
    return dataPolice.filter((item) => item.name.toLowerCase().includes(query));
  };
  useEffect(() => {
    const fetchHospitals = async () => {
      const res = await axios.get("http://localhost:5000/police_stations");
      setDataPolice(res.data);
    };
    fetchHospitals();
  }, []);

  // const searchLaw = () => {
  //   return dataLaw.filter((item) => item.name.toLowerCase().includes(query));
  // };
  // useEffect(() => {
  //   const fetchHospitals = async () => {
  //     const res = await axios.get("http://localhost:5000//lawyers");
  //     setDataLaw(res.data);
  //   };
  //   fetchHospitals();
  // }, []);

  return (
    <div className="search_body">
      <div className="inputDiv">
        <input
        id="inputSearch"
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <CardSectorPolice items={searchPolice(dataPolice)} />
      {/* <CardSectorLawyers item={searchLaw(dataLaw)}/> */}
    </div>
  );
}
export default SearchFile;
