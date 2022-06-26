import React, { createContext, useReducer ,useEffect} from "react";
import AppReducer from "./AppReducer";
const initialState = {
  watchlist: localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],
  watched: localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],
  
};

//create context

export const GlobalContext = createContext(initialState);
//provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(()=>{ 
    localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
    localStorage.setItem("watched",JSON.stringify(state.watched))
  },[state])

  // actions for
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
  };
  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCH_LIST", payload: id });
  };
  const addToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  //move to watched list
  const moveToWatchList = (movie,id)=>{
    dispatch({ type:"MOVE_TO_WATCH_LIST" ,payload: movie})
  }
  const removeFromWatched = (id)=>{
    dispatch({ type:"REMOVE_FROM_WATCHED" ,payload: id})
  }
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        moveToWatchList,
        addToWatched,
        removeFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
