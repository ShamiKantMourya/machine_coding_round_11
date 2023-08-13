import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../Context/DataContext";
import {
  addWatchlist,
  addStarred,
  removeWatchlist,
  removeStarred,
} from "./toast";

const Video = ({ video }) => {
  const { addDataDispatch, watch_list, star } = useContext(DataContext);
  const { id, imageURL, title, summary } = video;

  const isInWatchlater = watch_list?.some((movie) => movie.id === Number(id));
  const isInStar = star?.some((movie) => movie.id === Number(id));

  const watchlistHandler = () => {
    if (isInWatchlater) {
      addDataDispatch({
        type: "remove_watchlist",
        payload: id,
      });
      removeWatchlist();
    } else {
      addDataDispatch({
        type: "add_to_watchlist",
        payload: video,
      });
      addWatchlist();
    }
  };

  const starredHandler = () => {
    if (isInStar) {
      addDataDispatch({
        type: "remove_starred",
        payload: id,
      });
      removeStarred();
    } else {
      addDataDispatch({
        type: "add_to_starred",
        payload: video,
      });
      addStarred();
    }
  };

  return (
    <>
      <div className="movie-image-box">
        <Link to={`/movie/${video.id}`}>
          <img src={imageURL} alt="movie" />
        </Link>
      </div>
      <div className="movie-name">
        <h3>{title}</h3>
      </div>
      <div className="movie-description">
        <p>{summary}</p>
      </div>

      <div className="movie-btn-flex">
        <div className="movie-button">
          {isInWatchlater ? (
            <button onClick={watchlistHandler}>Remove Watchlist</button>
          ) : (
            <button onClick={watchlistHandler}>Add Watchlist</button>
          )}
        </div>
        <div className="movie-button">
          {isInStar ? (
            <button onClick={starredHandler}>UnStar</button>
          ) : (
            <button onClick={starredHandler}>Star</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Video;
