import React, { useEffect, useState } from "react";
import CardSector from "./CardSectorHospitals";
import axios from "axios";
import ButtonAddInfo from "./ButtonsAddInfoSectors/ButtonAddInfoSocials";
function SearchFile(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const search = () => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };
  const fetchHospitals = async () => {
    const res = await axios.get("https://backend-amber-three-41.vercel.app/socials_services");
    setData(res.data);
  };
  const handleDelete = (hospitalIdToDelete) => {
    fetch(`https://backend-amber-three-41.vercel.app/socials_services/${hospitalIdToDelete}`, {
      method: "DELETE",
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then(async (result) => {
        console.log(result.success);
        alert("success info deleted");
        await fetchHospitals();
        // You might want to perform other actions after a successful deletion
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div className="search_body">
      <div className="inputDiv">
        <input
        id="inputSearch"
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {props.isUserSignedIn ? <ButtonAddInfo /> : null}
      <CardSector
        items={search(data)}
        isUserSignedIn={props.isUserSignedIn}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default SearchFile;
