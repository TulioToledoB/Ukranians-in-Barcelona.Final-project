import React, { useState, useEffect } from "react";

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
      {socials.map((social) => (
        <div>
          <h2>{social.name}</h2>
          {social.link}
          {social.address}
        </div>
      ))}
    </div>
  );
}

export default SocialServices;
