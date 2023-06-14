import "./App.css";
import results from "./mocks/results.json";
import noResults from "./mocks/no-reuslts.json";
import { Movies } from "./components/Movies";

// console.log()
// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

function App() {
  const movies = results.Search;

  return (
    <div className="page">
      <h1>Hola mundo</h1>
      <header>
        <form action="" className="form">
          <input placeholder="Avengers, Forrest Gump..." type="text" />
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
