import { useMovies } from "./hooks/useMovies";
import { useQuery } from "./hooks/useQuery";
import { Movies } from "./components/Movies";
import "./App.css";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

function App() {  
  const { movies } = useMovies();
  const { query, updateQuery, error } = useQuery()


  const handleSubmit = (event) => {
    // Forma controladada (dependemos de React)
    // cada que se actualzia el input llama a render
    event.preventDefault()
    console.log({query})
    
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
