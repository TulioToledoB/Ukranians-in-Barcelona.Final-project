import React from "react";
import NavBar from "./Navbar";

function Header(props) {
  return (
    <div>
      <NavBar {...props} />
    </div>
  );
}
export default Header;
