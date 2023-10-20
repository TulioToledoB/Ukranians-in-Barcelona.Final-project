import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import "./GeneralBody.css";
import slides from "../data/carouselData.json";
import Card from "./Card";

function GeneralBody(props) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }
  console.log();
  return (
    <div className="generalBody">
      <table>
        {props.hospitals.map((hospital) => (
          <div>{hospital.name}</div>
        ))}
      </table>

      <div className="carouselCard">
        <Carousel data={slides} className="generalCarousel" />
        <div className="generalCarouselCard">
          {events.slice(0, 2).map((event) => (
            <Card element={event} />
          ))}
        </div>
      </div>
      <div className="listOfCards">
        {events.slice(2).map((event) => (
          <Card element={event} />
        ))}
      </div>
    </div>
  );
}

export default GeneralBody;
