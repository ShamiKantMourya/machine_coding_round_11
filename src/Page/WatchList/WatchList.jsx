import React from "react";
import { useContext } from "react";

import Header from "../../Components/Header/Header";
import Filter from "../../Components/Filter/Filter";
import { DataContext } from "../../Context/DataContext";
import Video from "../../Components/Video";
import { Link } from "react-router-dom";

const WatchList = () => {
  const { watch_list } = useContext(DataContext);
  console.log(watch_list, "watchlist video");
  return (
    <div className="watchlist">
      <Header />
      <Filter />
      <div className="movie-list">
        {watch_list?.map((movie) => (
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

export default WatchList;
