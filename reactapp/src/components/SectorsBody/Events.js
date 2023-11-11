import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormEvents";
import "./Sectors.css";
import BigCard_Events from "./SearchFormsSectors/BigCard_Event";

function Events() {
  const [events, setEvents] = useState([]);
  // const [error, setError] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const { t, i18n } = useTranslation();

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

  const handleListItemClick = (event) => {
    setSelectedHospital(event);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };
  return (
    <div className="events_body">
      <div className="title_div">
        <h2 className="title_sectors">{t("title_sector_event")}</h2>
      </div>
      <div className="allBody">
        <div className="list-and-card">
          <div className="list">
            <ListBody items={events} onItemClick={handleListItemClick} />
          </div>
          {selectedHospital && (
            <div className="big-card">
              <BigCard_Events
                event={selectedHospital}
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
