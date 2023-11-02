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
    <div className="sectors_body">
      <div>
        <ListBody items={events} />
      </div>
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default Events;
