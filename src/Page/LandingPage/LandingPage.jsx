import React from "react";

import Header from "../../Components/Header/Header";
import Filter from "../../Components/Filter/Filter";
import { movies } from "../../Data/Database";
import "./LandingPage.css";
import Video from "../../Components/Video";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <Filter />
      <div className="movie-list">
        {movies?.map((movie) => (
          <div className="movie-detail-list" key={movie.id}>
            <Video video={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
