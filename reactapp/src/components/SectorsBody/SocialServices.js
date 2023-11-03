import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormSocialSearvices";
import "./Sectors.css";

function SocialServices() {
  const [socials, setSocials] = useState([]);

  function fetchSocials() {
    fetch("http://localhost:5000/socials_services")
      .then((response) => response.json())
      .then((data) => {
        setSocials(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchSocials();
  }, []);

  return (
    <div className="social_services_body">
      <h2 className="title_sectors">Social services</h2>
      <div>
        <ListBody items={socials} />
      </div>
      <div>
        <SearchFile />
      </div>
    </div>
  );
}

export default SocialServices;
