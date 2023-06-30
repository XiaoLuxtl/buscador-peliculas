import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

function App() {  
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    // Forma no controlada (dependemos del DOM)
    event.preventDefault()
    const data = new window.FormData(event.target)
    const query = data.get('query')

    if (query === '') {
      console.log("No se ingresó ninguna película")
    }


    // si se tuviesen multiples query puedes usar
    // un objeto que reciba todos los campos
    
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)
    
  }

  return (
    <div className="page">
      <h1>Hola mundo</h1>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input name="query" placeholder="Avengers, Forrest Gump..." type="text" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
