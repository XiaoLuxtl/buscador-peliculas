import { useState } from "react";
import { searchMovies } from "../services/movies";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, getMovies };
}
