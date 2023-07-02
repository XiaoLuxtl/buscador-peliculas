export const searchMovies = async ({ query }) => {
  if (query === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?&s=${query}&apikey=${
        import.meta.env.VITE_OMDBAPI_KEY
      }`
    );

    const json = await response.json();

    const movies = json.Search;
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title:
        movie.Title.length >= 38
          ? movie.Title.substring(0, 38) + "..."
          : movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error al buscar las películas");
  }
};
