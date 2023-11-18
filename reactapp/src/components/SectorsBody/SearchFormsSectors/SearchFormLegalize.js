import React, { useEffect, useState } from "react";
import CardSectorLegalize from "./CardSectoorLegalize";
import axios from "axios";
import ButtonAddInfo from "./ButtonsAddInfoSectors/ButtonAddInfoLegalize";
function SearchFile(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const search = () => {
    return data.filter((item) => item.todo.toLowerCase().includes(query));
  };
  const fetchHospitals = async () => {
    const res = await axios.get("http://localhost:5000/legalization");
    setData(res.data);
  };
  const handleDelete = (hospitalIdToDelete) => {
    fetch(`http://localhost:5000/legalization/${hospitalIdToDelete}`, {
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
      <CardSectorLegalize
        items={search(data)}
        isUserSignedIn={props.isUserSignedIn}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default SearchFile;
