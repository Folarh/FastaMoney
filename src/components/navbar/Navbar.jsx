import React, { useState } from "react";

// ___________________STYLE IMPORT__________
import "./Navbar.css";

// ___________________React Icon__________
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

// ___________________ICONS IMPORT__________
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";

// ___________________COMPONENTS IMPORT__________
import Navigation from "./navigations/Navigation";
import SocialIcons from "../social-icons/SocialIcons";
import Logo from "./navbar-logo/Logo";
import Help from "./navbar-help/Help";
import Search from "./navbar-search/Search";

// ___________________ARRAY OF OBJECTS FOR NAVIGATION__________
const Navlinks = [
  { nav: "HOME", to: "#" },
  { nav: "SERVICES", to: "#" },
  { nav: "PAGES", to: "#" },
  { nav: "CASE SHOP", to: "#" },
  { nav: "BLOG", to: "#" },
  { nav: "CONTENT", to: "#" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <nav>
      <Logo />
      <Navigation Navlinks={Navlinks} toggle={toggle} />
      <SocialIcons>
        <img src={Instagram} alt="instagram-icon" />
        <img src={Linkedin} alt="linkedin-icon" />
        <img src={Twitter} alt="twitter-icon" />
        <img src={Facebook} alt="facebook-icon" />
      </SocialIcons>
      <Search />
      <Help />

      <div className="nav-harm" onClick={toggleHandler}>
        {toggle ? (
          <AiOutlineClose className="icon" />
        ) : (
          <CiMenuBurger className="icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
