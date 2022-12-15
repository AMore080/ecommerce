import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            inpMovieData {
                director
                description
                movieId
                image
                link
                title
            }
        }
    }
`;

export const QUERY_NOWPLAYING = gql`
  query nowPlaying {
    data
      @rest(
        type: Movies
        path: "movie/now_playing/?api_key=${process.env.REACT_APP_API_KEY}"
      ) {
      results {
        title
        backdrop_path
      }
    }
  }
`;

export const QUERY_SINGLEMOVIE = gql`
  query singleMovie($singleMovieId: ID!) {
    singleMovie(id: $singleMovieId) {
      id
      original_title
      poster_path
      overview
      release_date
    }
  }
`

export const QUERY_POPULARMOVIES = gql`
query popularMovies {
  data
    @rest(
      type: Movies
      path: "movie/popular?api_key=${process.env.REACT_APP_API_KEY}"
    ) {
    results {
      title
      backdrop_path
    }
  }
}
`

export const QUERY_GENRES = gql`
query genres {
  data
    (
      type: Genres
      path: "https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}"
    ) {
    results {
      name
    }
  }
}
`
// export const QUERY_SEARCHMOVIE = gql`
//   query searchMovie {
//     data
//       @rest(
//         type: Movies
//         path: "search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${searchInput}"
//       ) {
//       results {
//         title
//         backdrop_path
//       }
//     }
//   }
// `;