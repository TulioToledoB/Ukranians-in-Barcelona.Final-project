import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import "./GeneralBody.css";
import slides from "../data/carouselData.json";
import Card from "./Card";
import CardsLine from "./CardsLine";

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
          <div>
            <h2>{hospital.name}</h2>
            {hospital.link}
            {hospital.address}
          </div>
        ))}
      </table>
      <table>
        {props.socials.map((social) => (
          <div>
            <h2>{social.name}</h2>
            {social.link}
            {social.address}
          </div>
        ))}
      </table>
      <table>
        {props.lawyers.map((lawyer) => (
          <div>
            <h2>{lawyer.name}</h2>
            {lawyer.contact_info}
            {lawyer.specification}
          </div>
        ))}
      </table>
      <div>
        {props.legalization.map((element) => (
          <p>{element.description}</p>
        ))}
      </div>

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
