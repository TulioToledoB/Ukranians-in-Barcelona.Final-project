import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormLegalize";
import "./Sectors.css";
import BigCard from "./SearchFormsSectors/BigCard";

function Legalize() {
  const [legalization, setLegalization] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

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

  const handleListItemClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };

  return (
    <div className="legalization_body">
      <div className="title_div">
        <h2 className="title_sectors">Legalization in Spain</h2>
      </div>
      <div className="allBody">
        <div className="list-and-card">
          <div className="list">
            <ListBody items={legalization} onItemClick={handleListItemClick} />
          </div>
          {selectedHospital && (
            <div className="big-card">
              <BigCard
                hospital={selectedHospital}
                onClose={handleCloseBigCard}
              />
            </div>
          )}
        </div>
        {!selectedHospital && (
          <div className="searchResult">
            <SearchFile />
          </div>
        )}
      </div>
    </div>
  );
}

export default Legalize;
