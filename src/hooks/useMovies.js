import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousQuery = useRef(query);

  const getMovies = useCallback(async ({ query }) => {
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
  }, []);

  // Evitar el re-renderizado al escribir nuevos términos
  // ya que react ejecuta de nuevo el cuerpo de la función
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, loading, error, getMovies };
}
