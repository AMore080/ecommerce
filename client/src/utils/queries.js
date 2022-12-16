import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            movieOrders {
                _id
                purchaseDate
                movies {
                  _id
                  original_title
                  poster_path
                }
            }
        }
    }
`;

export const QUERY_NOWPLAYING = gql`
  query nowPlaying {
    data
      @rest(
        type: Movies
        path: "now_playing/?api_key=${process.env.REACT_APP_API_KEY}"
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