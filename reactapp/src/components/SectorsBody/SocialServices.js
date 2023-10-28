import React, { useState, useEffect } from "react";
import ListBody from "./ListBody";

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
    <div>
      <ListBody items={socials} />
    </div>
  );
}

export default SocialServices;
