import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormEvents";
import "./Sectors.css";

function Events() {
  const [events, setEvents] = useState([]);
  // const [error, setError] = useState(null);

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
  return (
    <div className="events_body">
      <div className="title_div">
        <h2 className="title_sectors">Events</h2>
      </div>
      <div className="allBody">
        <div>
          <ListBody items={events} />
        </div>
        <div className="searchResult">
          <SearchFile />
        </div>
      </div>
    </div>
  );
}

export default Events;
