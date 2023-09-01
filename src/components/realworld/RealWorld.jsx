//styles
import "./RealWorld.css";
//components
import Card from "../card/Card";

//image import
import Arrowleft from "../../assets/arrowleft.png";
import Arrowright from "../../assets/arrowright.png";

import Cap from "../../assets/realworld.png";

import React from "react";

const RealWorld = () => {
  return (
    <section className="realworld">
      <div className="realworld_container">
        <div className="realworld_text">
          <h2>REAL-WORLD EXPERIENCE</h2>
          <p>The best business consulting firm you can count on!</p>
        </div>
        <div className="realworld_card">
          <Card header="WEALTH MANAGEMENT" text="READ MORE" icon={Cap} />
          <Card header="WEALTH MANAGEMENT" text="READ MORE" icon={Cap} />
          <Card header="WEALTH MANAGEMENT" text="READ MORE" icon={Cap} />
        </div>
        <div className="realworld_meet">
          <p>MEET THE PARTNERS</p>
          <div className="realworld_arrow">
            <img src={Arrowleft} alt="left arrow" />
            <img src={Arrowright} alt="right arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorld;
