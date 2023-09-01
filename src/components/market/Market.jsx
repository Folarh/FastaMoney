import { useState } from "react";

///components
import MarketCard from "./MarketCard";

//Assets
import Video from "../../assets/video.png";
import Phone from "../../assets/phone.png";

//style
import "./Market.css";

const Market = () => {
  const [range, setRange] = useState(80);
  const [rangeSec, setRangeSec] = useState(60);

  const handleRange = (e) => {
    setRange(e.target.value);
  };

  const handleRange2 = (e) => {
    setRangeSec(e.target.value);
  };
  return (
    <section className="market">
      <div className="market_container">
        <div className="market_video">
          <img src={Video} alt="play" />
        </div>

        <div className="market_text">
          <h2>We’re leading in the market</h2>

          <div className="market_history">
            <p className="first">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              doloremagna aliqua lonm andhn.
            </p>

            <p className="second">
              We have 35+ years of experience. We offer marketing and consulting
              services
            </p>
          </div>

          <div className="market_input">
            <input
              type="range"
              min={0}
              max={100}
              style={{ width: "90%" }}
              value={range}
              onChange={handleRange}
            />
            <div>
              <label htmlFor="">CONSULTING</label>
              <p>{range}%</p>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              style={{ width: "60%" }}
              value={rangeSec}
              onChange={handleRange2}
            />
            <div>
              <label htmlFor="">ADVICES</label>
              <p>{rangeSec}%</p>
            </div>
          </div>

          <div className="market_phone">
            <img src={Phone} alt="phone call" />

            <div className="market_questions">
              <p>Have any question? Give us a call</p>
              <p>+2348000000000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="market_con">
        <MarketCard className="market_card">
          <p>GET PROFESSIONAL ADVICE</p>
          <span>
            There are many variations of available but the majority have
            suffered alteration.
          </span>
        </MarketCard>

        <MarketCard className="market_card">
          <p>TRUSTED & PROFESSIONAL</p>
          <span>
            There are many variations of available but the majority have
            suffered alteration.
          </span>
        </MarketCard>
      </div>
    </section>
  );
};

export default Market;
