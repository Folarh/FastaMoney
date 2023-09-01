import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ Navlinks, toggle }) => {
  return (
    <ul className="list_container" id={toggle ? "toggle-on" : ""}>
      {Navlinks.map((navlink) => (
        <li key={navlink.nav} className="links">
          <Link to={navlink.to}> {navlink.nav}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
