import { useMovies } from "./hooks/useMovies";
import { useQuery } from "./hooks/useQuery";
import { Movies } from "./components/Movies";
import "./App.css";
import { useState } from "react";

function App() {
  const [sort, setSort] = useState(false);
  const { query, updateQuery, error } = useQuery();
  const { movies, loading, getMovies } = useMovies({ query, sort });

  const handleSubmit = (event) => {
    // Forma controladada (dependemos de React)
    // cada que se actualzia el input llama a render
    event.preventDefault();
    getMovies({ query });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    updateQuery(newQuery);
  };

  return (
    <div className="page">
      <h1>Buscador de películas</h1>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Avengers, Forrest Gump..."
            type="text"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando ...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
