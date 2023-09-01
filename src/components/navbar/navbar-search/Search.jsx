import React from "react";
import "./Search.css";
import SearchIcon from "../../../assets/search.png";
import Line from "../../../assets/Line.png";

const Search = () => {
  return (
    <main className="nav_search">
      <img src={Line} alt="line-icon" className="line" />
      <img src={SearchIcon} alt="search-icon" className="search" />
      <img src={Line} alt="line-icon" className="line" />
    </main>
  );
};

export default Search;
