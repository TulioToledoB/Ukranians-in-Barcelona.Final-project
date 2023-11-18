import React, { useEffect, useState } from "react";
import CardSectorHospitals from "./CardSectorHospitals";
import axios from "axios";
import ButtonAddInfo from "./ButtonAddInfo";
import { Link } from "react-router-dom";

function SearchFile(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const search = () => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };
  useEffect(() => {
    const fetchHospitals = async () => {
      const res = await axios.get("http://localhost:5000/hospitals");
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
      {props.isUserSignedIn ? <ButtonAddInfo /> : null}
      <CardSectorHospitals items={search(data)} />
    </div>
  );
}
export default SearchFile;

///<Link to="/legalize" className="nav-link" href="#">
///{t("legalization")}
/// </Link>
