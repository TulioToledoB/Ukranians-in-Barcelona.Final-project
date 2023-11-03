import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormJobOffers";
import "./Sectors.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);

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
  return (
    <div className="job_offers_body">
      <div className="title_div">
        <h2 className="title_sectors">Job offers</h2>
      </div>
      <div className="allBody">
        <div>
          <ListBody items={jobs} />
        </div>
        <div className="searchResult">
          <SearchFile />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
