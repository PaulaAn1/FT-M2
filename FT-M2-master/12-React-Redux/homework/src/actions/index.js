export function getMovies(title) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${title}=` + title)
    .then(response => response.json())
    .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(idMovie) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=246a8efb=")
    .then(response => response.json())
    .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function addMovieFavorite(id) {
  return { type: "ADD_MOVIE_FAVORITE", payload }
}

export function removeMovieFavorite(id) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload}
}