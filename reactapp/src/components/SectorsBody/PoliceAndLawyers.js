import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormLawyersAndPolice";
import "./Sectors.css";
import "../imgs_interface/police.jpg";
import BigCard_Lawyers from "./SearchFormsSectors/BigCard_Lawyers";

function PoliceAndLawyers(props) {
  const [lawyers, setLawyers] = useState([]);
  const [police, setPolice] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const { t, i18n } = useTranslation();

  function fetchLawyers() {
    fetch("http://localhost:5000/lawyers")
      .then((response) => response.json())
      .then((data) => {
        setLawyers(data);
        console.log(data);
      });
  }
  function fetchPolice() {
    fetch("http://localhost:5000/police_stations")
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
  const handleListItemClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleListItemClick1 = (lawyers) => {
    setSelectedHospital(lawyers);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };
  return (
    <div className="police_lawyers_body">
      <div className="title_div">
        <h2 className="title_sectors">
          {t("title_sector_lawyers_and_police")}
        </h2>
      </div>
      <div className="allBody">
        <div className="list-and-card">
          <div className="list">
            <ListBody items={lawyers} onItemClick={handleListItemClick1} />
            <ListBody items={police} onItemClick={handleListItemClick} />
          </div>

          {selectedHospital && (
            <div className="big-card">
              <BigCard_Lawyers
                lawyer={selectedHospital}
                onClose={handleCloseBigCard}
                sector={police}
                sector1={lawyers}
              />
            </div>
          )}
        </div>
        {!selectedHospital && (
          <div className="searchResult">
            <SearchFile isUserSignedIn={props.isUserSignedIn} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PoliceAndLawyers;
