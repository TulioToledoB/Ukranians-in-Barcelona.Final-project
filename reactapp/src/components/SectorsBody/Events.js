import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchForm";
import "./Events.css"; // Asegúrate de importar el CSS correcto

function Events() {
  const [events, setEvents] = useState([]);

  function fetchEvents() {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="events_body"> {/* Modificado el nombre de la clase */}
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
