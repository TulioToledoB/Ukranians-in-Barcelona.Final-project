import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormEvents";
import "./Sectors.css";
import BigCard_Events from "./SearchFormsSectors/BigCard_Event";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function Events(props) {
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
        <img src={arrowLeft}></img>
        <h2 className="title_sectors">{t("title_sector_event")}</h2>
        <img src={arrowRight}></img>
      </div>
      <div className="allBody">
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
        {!selectedHospital && (
          <div className="searchResult">
            <SearchFile isUserSignedIn={props.isUserSignedIn} />
          </div>
        )}
        </div>
      </div>
  );
}

export default Events;
