import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { movies } from "../../Data/Database";
import Header from "../Header/Header";
import "./MovieDetail.css";
import { DataContext } from "../../Context/DataContext";
import { addWatchlist, addStarred } from "../toast";
const MovieDetail = () => {
  const { id } = useParams();
  const { addDataDispatch } = useContext(DataContext);
  const singleVideo = movies?.find((movie) => movie.id === Number(id));

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

  const addToWatchlistHandler = () => {
    addDataDispatch({
      type: "add_to_watchlist",
      payload: singleVideo,
    });
    addWatchlist();
  };

  const addToStarred = () => {
    addDataDispatch({
      type: "add_to_starred",
      payload: singleVideo,
    });
    addStarred();
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
              <button onClick={addToWatchlistHandler}>Watchlist</button>
            </div>
            <div className="btn">
              <button onClick={addToStarred}>Star</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
