import React from "react";
import "./heroImage.css";

const HeroImage = () => {
  return (
    <img
      className="hero-image"
      src={require("../../images/outdoor.png")}
      alt="falafel"
    />
  );
};

export default HeroImage;
