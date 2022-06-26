import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList,addToWatched, watchlist,watched } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o)=> o.id===movie.id);
  const watchlistDisabled = storedMovie ? true:storedMovieWatched ?true: false;
 const watchedDisabled = storedMovieWatched ? true:false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Posters`}
          />
        ) : (
          <div className="filler-post"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {/* {movie.release_date.substring(0,4)} */}
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="control">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to WatchList
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addToWatched(movie)}
          >
            watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
