/* eslint-disable react/prop-types */
export function ListOfMovies({ movies }) {
  return (
    // Esto es mala practica ya que
    // se depende del nombre de la API
    // movie.Year

    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
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
