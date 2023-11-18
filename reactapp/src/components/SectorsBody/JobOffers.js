import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormJobOffers";
import "./Sectors.css";
import BigCard_Jobs from "./SearchFormsSectors/BigCard_Jobs";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function Jobs(props) {
  const [jobs, setJobs] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const { t, i18n } = useTranslation();

  function fetchJobs() {
    fetch("http://localhost:5000/job_offers")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchJobs();
  }, []);

  const handleListItemClick = (job) => {
    setSelectedHospital(job);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };
  return (
    <div className="job_offers_body">
      <div className="title_div">
        <img src={arrowLeft}></img>
        <h2 className="title_sectors">{t("title_sector_jobs")}</h2>
        <img src={arrowRight}></img>
      </div>
      <div className="allBody">
          <div className="list">
            <ListBody items={jobs} onItemClick={handleListItemClick} />
          </div>
          {selectedHospital && (
            <div className="big-card">
              <BigCard_Jobs
                Job={selectedHospital}
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

export default Jobs;
