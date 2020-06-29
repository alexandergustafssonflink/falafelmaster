import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="line-1">
        <span> ADRESS: </span>FÄNRIKSGATAN 3 - GÖTEBORG
      </p>
      <p className="line-2">
        {" "}
        (Alldeles intill rondellen vid hållplats Bellevue)
      </p>
    </div>
  );
};

export default Footer;
