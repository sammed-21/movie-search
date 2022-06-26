import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const MovieControl = ({ movie, type }) => {
  const { removeMovieFromWatchList, addToWatched, addMovieToWatchList,
    moveToWatchList,removeFromWatched} =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye" onClick={() => addToWatched(movie)}>
              watched
            </i>
          </button>

          <button className="ctrl-btn">
            <i
              className="fa-fw fa fa-times"
              onClick={() => removeMovieFromWatchList(movie.id)}
            >
              remove
            </i>
          </button>
        </>
      )}
      {type === "watched" &&
      (
        <>
          <button className="ctrl-btn">
            <i
              className="fa-fw far fa-eye"
              onClick={() => moveToWatchList(movie)}
            >
              add watchlist
            </i>s
          </button>

          <button className="ctrl-btn">
            <i
              className="fa-fw fa fa-times"
              onClick={() => removeFromWatched(movie.id)}
            >
              remove
            </i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControl;
