
import React, { useEffect, useState } from "react";
import CardSectorLawyersAndPolice from "./CardSectorLawyersAndPolice";
import axios from "axios";
import ButtonAddInfo from "./ButtonsAddInfoSectors/ButtonAddInfoLawyers";
function SearchFile(props) {
  const [query, setQuery] = useState("");
  const [lawyersData, setLawyersData] = useState([]);
  const [policeData, setPoliceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchLawyersAndPolice = async () => {
    try {
      const lawyersResponse = await axios.get("http://localhost:5000/lawyers");
      const policeResponse = await axios.get(
        "http://localhost:5000/police_stations"
      );

      setLawyersData(lawyersResponse.data);
      setPoliceData(policeResponse.data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleDelete = (idToDelete, sector) => {
    fetch(`http://localhost:5000/${sector}/${idToDelete}`, {
      method: "DELETE",
      credentials: "include", // Include credentials for CORS
    })
      .then((response) => response.json())
      .then(async (result) => {
        console.log(result.success);
        alert("Success! Info deleted");
        await fetchLawyersAndPolice();
        // You might want to perform other actions after a successful deletion
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  useEffect(() => {
    const combinedData = [...lawyersData, ...policeData];
    setFilteredData(
      combinedData.filter((item) => item.name.toLowerCase().includes(query))
    );
  }, [query, lawyersData, policeData]);

  useEffect(() => {
    fetchLawyersAndPolice();
  }, []);

  return (
    <div className="search_body">
      <div className="inputDiv">
        <input
         id="inputSearch"
          type="text"
          placeholder="Поиск..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {props.isUserSignedIn ? <ButtonAddInfo /> : null}

      <CardSectorLawyersAndPolice
        items={filteredData}
        isUserSignedIn={props.isUserSignedIn}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default SearchFile;
