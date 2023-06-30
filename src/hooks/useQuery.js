
import { useState, useEffect } from "react";

export function useQuery() {
    const [query, updateQuery] = useState("")  
    const [error, setError] = useState(null)
  
    useEffect(() => {
      if (query === '') {
        setError("Se requiere el título de una pelicula")
        return
      }
  
      if (query.length < 3) {
        setError("La búsqueda debe tener la menos 3 caracteres")
        return
      }
  
      setError(null)
    }, [query])
  
    return {query, updateQuery, error}
  }
