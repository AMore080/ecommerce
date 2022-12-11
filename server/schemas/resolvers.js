module.exports = {
  Query: {
    movies: async (parent,args,{dataSources}) => {
      try {
        const allMovies = await dataSources.MoviesAPI.getNowPlaying();
        return allMovies.map(movie => ({
          backdrop_path: movie.backdrop_path,
          original_title: movie.original_title,
        }))
      } catch (error) {
        throw error;
      }
    }
  }
}