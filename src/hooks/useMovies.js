import results from "../mocks/results.json";
import noResults from "../mocks/no-reuslts.json";
import { useState } from "react";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

export function useMovies({ query }) {
const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search;
    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title.length >= 38 ? movie.Title.substring(0,38) + "..." : movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

    const getMovies = () => {
      if (query) {
        console.log(query)
        // setResponseMovies(results)
        fetch(`https://www.omdbapi.com/?&s=${query}&apikey=${import.meta.env.VITE_OMDBAPI_KEY}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
      } else {
        setResponseMovies(noResults)
      }

    }
  
    return { movies: mappedMovies, getMovies };
}