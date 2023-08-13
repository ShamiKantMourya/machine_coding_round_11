import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h3>IMDB</h3>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search movie by name,cast,director" />
        <button className="search-btn">
          <BiSearchAlt2 />
        </button>
      </div>

      <Link to="/" className="link">
        Movies
      </Link>
      <Link to="/watchlist" className="link">
        {" "}
        WatchList
      </Link>
      <Link to="/starred" className="link">
        Starred
      </Link>
    </div>
  );
};

export default Header;
