import { useState, useRef } from "react";
import { searchMovies } from "../services/movies";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousQuery = useRef(query);

  const getMovies = async () => {
    if (query === previousQuery.current) return;
    try {
      setLoading(true);
      setError(null);
      previousQuery.current = query;
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, getMovies };
}
