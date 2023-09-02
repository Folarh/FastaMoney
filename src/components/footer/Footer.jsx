import { Link } from "react-router-dom";

//assets
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import map from "../../assets/map.png";

import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

//components
import SocialIcons from "../../components/social-icons/SocialIcons";
import Button from "../../components/button/Button";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-logo">
          <h3>CreativeLogo</h3>
          <p>
            Welcome to our consultancy agency. Lore ipsum simply text amet cing
            elit simply text amet cing elit.
          </p>

          <p className="footer_line"></p>

          <div className="footer_phone">
            <img src={call} alt="phone" />
            <span>+234800000000000</span>
          </div>

          <div className="footer_email">
            <img src={mail} alt="email" />
            <span>needhelp@company.com</span>
          </div>

          <div className="footer-location">
            <img src={map} alt="location" />
            <span>66 Broklyn Street New York, USA</span>
          </div>
        </div>

        <div className="footer_explore">
          <h3>EXPLORE</h3>

          <div className="footer_con">
            <ul>
              <li>About</li>
              <li>Meet our Team</li>
              <li>Case studies</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>

            <ul>
              <li>Support</li>
              <li>Terms of use</li>
              <li>Privacy & Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div className="footer_news">
          <h3>NEWS LETTER</h3>

          <div className="footer_form">
            <label>Subscribe for latest articles and resources</label>
            <div className="footer_input">
              <input type="email" placeholder="Email Address" />
              <Button>REGISTER</Button>
            </div>
          </div>
        </div>
      </div>

      <p className="footer_lower"></p>

      <div className="footer_lower_lower">
        <p>© Copyright 2021 by Company</p>

        <SocialIcons className="footer_icon">
          <Link to="#">
            <img src={instagram} alt="instagram" />
          </Link>

          <Link to="#">
            <img src={linkedin} alt="linkedin" />
          </Link>

          <Link to="#">
            <img src={twitter} alt="twitter" />
          </Link>

          <Link to="#">
            <img src={facebook} alt="facebook" />
          </Link>
        </SocialIcons>
      </div>
    </footer>
  );
};

export default Footer;
