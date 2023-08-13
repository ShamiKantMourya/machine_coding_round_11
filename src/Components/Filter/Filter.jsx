import React from "react";

import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-movie-text">
        <h3>Movies</h3>
      </div>
      <div className="filter-genre">
        <select>
          <option>All Genre</option>
          <option>Drama</option>
          <option>Crime</option>
          <option>Action</option>
          <option>Fantasy</option>
          <option>Adventure</option>
          <option>Romance</option>
          <option>Sci-Fi</option>
          <option>Biography</option>
        </select>
      </div>
      <div className="filter-release-year">
        <select>
          <option>1990-1995</option>
          <option>1995-2000</option>
          <option>2000-2005</option>
          <option>2005-2010</option>
        </select>
      </div>
      <div className="filter-rating">
        <select>
          <option>8.0-8.5</option>
          <option>8.5-9.0</option>
          <option>9.0-9.5</option>
        </select>
      </div>
      <div className="add-new-movie-btn">
        <button>Add a movie</button>
      </div>
    </div>
  );
};

export default Filter;
