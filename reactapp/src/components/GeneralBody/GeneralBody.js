import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import "./GeneralBody.css";
import slides from "../data/carouselData.json";
import Card from "./Card";

function GeneralBody(props) {
  const [events, setEvents] = useState(null);
  // const [error, setError] = useState(null);
  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="generalBody">
      {/* {error && <h1>{JSON.stringify(error)}</h1>} */}

      <table>
        {props.lawyers.map((lawyer) => (
          <div>
            <h2>{lawyer.name}</h2>
            {lawyer.contact_info}
            {lawyer.specification}
          </div>
        ))}
      </table>

      <div className="carouselCard">
        <Carousel data={slides} className="generalCarousel" />
        {events && (
          <div className="generalCarouselCard">
            {events.slice(0, 2).map((event) => (
              <Card element={event} />
            ))}
          </div>
        )}
      </div>
      {events && (
        <div className="listOfCards">
          {events.slice(2).map((event) => (
            <Card element={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GeneralBody;
