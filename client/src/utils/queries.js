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
    movies {
      backdrop_path
      id
      original_title
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