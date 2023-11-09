import React from "react";
import "./BigCard.css";

function BigCard_Jobs(props) {
  // Define a function to open the link in the browser
  const openInBrowser = () => {
    if (props.JobOffer && props.JobOffer.link) {
      window.open(props.JobOffer.link, '_blank');
    }
  };

  return (
    <div className="bigCard">
      <div className="bigCard-body">
        <p>{props.Job.city}</p>
        <p>{props.Job.name}</p>
        <a href={props.Job.link} onClick={openInBrowser}>Open in the browser</a>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default BigCard_Jobs;
