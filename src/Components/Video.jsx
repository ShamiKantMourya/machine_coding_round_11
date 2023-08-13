import React from "react";
import { useContext } from "react";

import { DataContext } from "../Context/DataContext";
import { addWatchlist, addStarred } from "./toast";

const Video = ({ video }) => {
  const { addDataDispatch, watch_list, star } = useContext(DataContext);
  const { imageURL, title, summary } = video;

  const addToWatchlistHandler = () => {
    addDataDispatch({
      type: "add_to_watchlist",
      payload: video,
    });
    addWatchlist();
  };

  const addToStarred = () => {
    addDataDispatch({
      type: "add_to_starred",
      payload: video,
    });
    addStarred();
  };

  return (
    <>
      <div className="movie-image-box">
        <img src={imageURL} alt="movie" />
      </div>
      <div className="movie-name">
        <h3>{title}</h3>
      </div>
      <div className="movie-description">
        <p>{summary}</p>
      </div>
      <div className="movie-btn-flex">
        <div className="movie-button">
          <button onClick={addToWatchlistHandler}>Watchlist</button>
        </div>
        <div className="movie-button">
          <button onClick={addToStarred}>Star</button>
        </div>
      </div>
    </>
  );
};

export default Video;
