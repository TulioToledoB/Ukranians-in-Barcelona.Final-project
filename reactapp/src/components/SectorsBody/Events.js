import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormEvents";
import "./Sectors.css";
import BigCard from "./SearchFormsSectors/BigCard";

function Events() {
  const [events, setEvents] = useState([]);
  // const [error, setError] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  function fetchEvents() {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
    //.catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleListItemClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };
  return (
    <div className="events_body">
      <div className="title_div">
        <h2 className="title_sectors">Events</h2>
      </div>
      <div className="allBody">
        <div className="list-and-card">
          <div className="list">
            <ListBody items={events} onItemClick={handleListItemClick} />
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

export default Events;
