import React from "react";
import NavBar from "./Navbar";
import "./Header.css"

function Header(props) {
  return (
    <div className="header">
      <NavBar {...props} />
    </div>
  );
}
export default Header;
