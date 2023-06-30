/* eslint-disable react/prop-types */
export function ListOfMovies({ movies }) {
  return (
    // Esto es mala practica ya que
    // se depende del nombre de la API
    // movie.Year

    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

export function NoMoviesResult() {
  return <p>Sin resultados para esta búsqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
}
