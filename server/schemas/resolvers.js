module.exports = {
  Query: {
    movies: async(parent, args, {dataSources}) => {
      try {
        const nowPlayingMovies = await dataSources.MovieApi.getNowPlaying();
        return nowPlayingMovies.map(movie => {
          id: movie.results
        });
      } catch (error) {
        throw error;
      }
    },
  }
}