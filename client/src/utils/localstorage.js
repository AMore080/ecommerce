export const getSavedMovieIds = () => {
    const savedMovieIds = localStorage.getItem('saved_movies')
      ? JSON.parse(localStorage.getItem('saved_movies'))
      : [];
  
    return savedMovieIds;
  };
  
  export const saveMovieIds = (movieIdArr) => {
    if (movieIdArr.length) {
      localStorage.setItem('saved_movies', JSON.stringify(movieIdArr));
    } else {
      localStorage.removeItem('saved_movies');
    }
  };