import React from "react";
import Line from "../../../assets/Line.png";
import "./Logo.css";

const Logo = () => {
  return (
    <main className="nav_logo">
      <span className="logo">CreativeLogo</span>
      <img src={Line} alt="line-icon" className="line" />
    </main>
  );
};

export default Logo;
