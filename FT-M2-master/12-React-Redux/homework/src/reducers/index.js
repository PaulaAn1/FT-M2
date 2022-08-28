const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: [... state, state.moviesFavourites.concat(action.payload)]
      }
    case "GET_MOVIES":
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
    case "REMOVE_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: [...state, state.moviesFavourites]

      }
  
    default: return {...state}
      
  }
  /* if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      }
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }
  return state; */
}

export default rootReducer;