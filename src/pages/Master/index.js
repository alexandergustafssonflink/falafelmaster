import React from "react";
import "./master.css";

const Master = () => {
  return (
    <div className="master">
      <h2 className="master-text">
        Vi är <span> MÄSTARE </span> på falafel!
      </h2>
      <img
        src={require("../../images/crown2.svg")}
        alt="crown"
        className="crown"
      />

      <h2 className="phone"> Tel: 073-486 69 45 </h2>
    </div>
  );
};

export default Master;
