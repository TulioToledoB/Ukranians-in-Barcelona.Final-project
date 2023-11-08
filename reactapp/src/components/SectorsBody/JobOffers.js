import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormJobOffers";
import "./Sectors.css";
import BigCard_Jobs from "./SearchFormsSectors/BigCard_Jobs";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  function fetchJobs() {
    fetch("http://localhost:5000/jobs_offerrs")
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
        <h2 className="title_sectors">Job offers</h2>
      </div>
      <div className="allBody">
        <div className="list-and-card">
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

export default Jobs;
