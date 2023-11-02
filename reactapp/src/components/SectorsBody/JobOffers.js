import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchForm";
import "./JobOffers.css";

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
    <div className="job_offers_body"> {/* Modificando el nombre de la clase */}
      <div>
        <ListBody items={jobs} />
      </div>
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default Jobs;
