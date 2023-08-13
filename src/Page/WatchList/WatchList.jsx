import React from "react";
import { useContext } from "react";

import Header from "../../Components/Header/Header";
import Filter from "../../Components/Filter/Filter";
import { DataContext } from "../../Context/DataContext";
import Video from "../../Components/Video";

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
            <Video video={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
