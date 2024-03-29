import React, { useState,useRef,useEffect } from "react";
import ResultCard from './ResultCard'
const Add = (movie) => {
  const ref = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
         if(!data.error){
          setResults(data.results);
         }else{
          setResults([])
         }
      });
  };
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.key === '/') {
        ref.current.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref])
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
               
              ref={ref}
              onChange={onChange}
              placeholder="Search for a movie '  Ctrl  +  / '"
            />
          </div>
          {
            results.length > 0 && (
              <ul className="results">
                {results.map((movie)=>(
                  <li key={movie.id}> 
                  <ResultCard movie={movie}/>
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Add;
