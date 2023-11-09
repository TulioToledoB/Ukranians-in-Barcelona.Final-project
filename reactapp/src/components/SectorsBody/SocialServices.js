import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormSocialSearvices";
import "./Sectors.css";
import BigCard_Socials from "./SearchFormsSectors/BigCard_Socials";

function SocialServices() {
  const [socials, setSocials] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

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

  const handleListItemClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleCloseBigCard = () => {
    setSelectedHospital(null);
  };

  return (
    <div className="social_services_body">
      <div className="title_div">
        <h2 className="title_sectors">Social services</h2>
      </div>
      <div className="allBody">
        <div className="list-and-card">
          <div className="list">
            <ListBody items={socials} onItemClick={handleListItemClick} />
          </div>
          {selectedHospital && (
            <div className="big-card">
              <BigCard_Socials
                social={selectedHospital}
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

export default SocialServices;
