import { useState, useEffect, useRef } from "react";

export function useQuery() {
  const [query, updateQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return
    }

    if (query === "") {
      setError("Se requiere el título de una pelicula");
      return;
    }

    if (query.length < 3) {
      setError("La búsqueda debe tener la menos 3 caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return { query, updateQuery, error };
}
