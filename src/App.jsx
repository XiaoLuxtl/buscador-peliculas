import { useMovies } from "./hooks/useMovies";
import { useQuery } from "./hooks/useQuery";
import { Movies } from "./components/Movies";
import "./App.css";

function App() {
  const { query, updateQuery, error } = useQuery()
  const { movies, getMovies } = useMovies({ query });


  const handleSubmit = (event) => {
    // Forma controladada (dependemos de React)
    // cada que se actualzia el input llama a render
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateQuery(newQuery)
  }

  

  return (
    <div className="page">
      <h1>Hola mundo</h1>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder="Avengers, Forrest Gump..." type="text" />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
