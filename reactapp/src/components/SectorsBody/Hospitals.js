import React, { useState, useEffect, useTransition } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormHospitals";
import "./Sectors.css";
import BigCard from "./SearchFormsSectors/BigCard";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function Hospitals(props) {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const { t, i18n } = useTranslation();

  function fetchHospitals() {
    fetch("https://backend-amber-three-41.vercel.app/hospitals")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchHospitals();
  }, []);

  const handleListItemClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };

  return (
    <div className="hospitals_body">
      <div className="title_div">
      <img src={arrowLeft}></img>
        <h2 className="title_sectors">{t("title_sector_hospitals")}</h2>
        <img src={arrowRight}></img>
      </div>
      <div className="allBody">
          <div className="list">
            <ListBody items={hospitals} onItemClick={handleListItemClick} />
          </div>
          {selectedHospital && (
            <div className="big-card">
              <BigCard
                hospital={selectedHospital}
                onClose={handleCloseBigCard}
              />
            </div>
          )}
        {!selectedHospital && (
          <div className="searchResult">
            <SearchFile isUserSignedIn={props.isUserSignedIn} />
          </div>
        )}
        </div>
      </div>
  );
}

export default Hospitals;
