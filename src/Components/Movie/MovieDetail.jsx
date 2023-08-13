import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { movies } from "../../Data/Database";
import Header from "../Header/Header";
import "./MovieDetail.css";
import { DataContext } from "../../Context/DataContext";
import {
  addWatchlist,
  addStarred,
  removeWatchlist,
  removeStarred,
} from "../toast";
const MovieDetail = () => {
  const { id } = useParams();
  const { addDataDispatch, watch_list, star } = useContext(DataContext);
  const singleVideo = movies?.find((movie) => movie.id === Number(id));

  const isInWatchlater = watch_list?.some((movie) => movie.id === Number(id));
  const isInStar = star?.some((movie) => movie.id === Number(id));

  const {
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = singleVideo;

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
        payload: singleVideo,
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
        payload: singleVideo,
      });
      addStarred();
    }
  };
  return (
    <div className="moviedetails">
      <div>
        <Header />
      </div>
      <div className="movie-detail-container">
        <div className="movie-detail-image-box">
          <img src={imageURL} alt="movie" />
        </div>
        <div className="movie-detail-side">
          <div className="movie-detail-title">
            <h3>{title}</h3>
          </div>
          <div className="movie-detail-div">
            <p className="p-text">Summary: </p>
            <p>{summary}</p>
          </div>
          <div className="movie-detail-div">
            <p className="p-text">Year : </p>
            <p>{year}</p>
          </div>
          {genre.map((text, index) => (
            <div className="movie-detail-div" key={index}>
              <p className="p-text">Genre : </p>
              <p>{text}</p>
            </div>
          ))}
          <div className="movie-detail-div">
            <p className="p-text">Rating : </p>
            <p>{rating}</p>
          </div>
          <div className="movie-detail-div">
            <p className="p-text">Director : </p>
            <p>{director}</p>
          </div>
          <div className="movie-detail-div">
            <p className="p-text">Writer : </p>
            <p>{writer}</p>
          </div>
          {cast?.map((name, index) => (
            <div className="movie-detail-div" key={index}>
              <p className="p-text">Cast: </p>
              <p>{name}</p>
            </div>
          ))}
          <div className="movie-detail-button">
            <div className="btn">
              {isInWatchlater ? (
                <button onClick={watchlistHandler}>Remove Watchlist</button>
              ) : (
                <button onClick={watchlistHandler}>Add Watchlist</button>
              )}
            </div>
            <div className="btn">
              {isInStar ? (
                <button onClick={starredHandler}>UnStar</button>
              ) : (
                <button onClick={starredHandler}>Star</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
