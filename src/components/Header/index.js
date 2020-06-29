import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h3 className="logo"> Falafelmästaren </h3>
      <div className="top-right">
        {" "}
        <img
          className="falafel-icon"
          src={require("../../images/falafel-icon.svg")}
          alt="falafel"
        />
      </div>
    </div>
  );
};

export default Header;
