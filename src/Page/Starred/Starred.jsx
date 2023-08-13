import React from "react";
import { useContext } from "react";

import Filter from "../../Components/Filter/Filter";
import Header from "../../Components/Header/Header";
import { DataContext } from "../../Context/DataContext";
import Video from "../../Components/Video";
import { Link } from "react-router-dom";

const Starred = () => {
  const { star } = useContext(DataContext);
  console.log(star, "starred videos");
  return (
    <div className="starred">
      <Header />
      <Filter />
      <div className="movie-list">
        {star?.map((movie) => (
          <div className="movie-detail-list" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Video video={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starred;
