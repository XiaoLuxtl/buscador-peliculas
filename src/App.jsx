import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useRef } from "react";

// https://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_OMDBAPI_KEY}

function App() {  
  const { movies } = useMovies();
  const inputRef = useRef()

  /* Esto esta bien, pero se puede recuperar la información
  /  del formulario desde la misma llamada on submit
  /  para asi evitar estar crenado muchos "useRefs" */
  const handleSubmit = () => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <div className="page">
      <h1>Hola mundo</h1>
      <header>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder="Avengers, Forrest Gump..." type="text" />
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
