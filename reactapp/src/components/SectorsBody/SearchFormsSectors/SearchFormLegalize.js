import React, { useEffect, useState } from "react";
import CardSectorLegalize from "./CardSectoorLegalize";
import axios from "axios";
function SearchFile() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const search = () => {
    return data.filter((item) => item.todo.toLowerCase().includes(query));
  };
  useEffect(() => {
    const fetchHospitals = async () => {
      const res = await axios.get("http://localhost:5000/legalization");
      setData(res.data);
    };
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
      <CardSectorLegalize items={search(data)} />
    </div>
  );
}
export default SearchFile;
