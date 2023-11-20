import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";
import SearchFile from "./SearchFormsSectors/SearchFormSocialSearvices";
import "./Sectors.css";
import BigCard_Socials from "./SearchFormsSectors/BigCard_Socials";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import arrowLeft from "./arrowLeftCut.png";
import arrowRight from "./arrowRightCut.png";

function SocialServices(props) {
  const [socials, setSocials] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const { t, i18n } = useTranslation();

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
        <img src={arrowLeft}></img>
        <h2 className="title_sectors">{t("title_sector_socials")}</h2>
        <img src={arrowRight}></img>
      </div>
      <div className="allBody">
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
        {!selectedHospital && (
          <div className="searchResult">
            <SearchFile isUserSignedIn={props.isUserSignedIn} />
          </div>
        )}
        </div>
      </div>
  );
}

export default SocialServices;
