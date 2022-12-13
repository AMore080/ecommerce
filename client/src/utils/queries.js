import { gql } from "@apollo/client";

export const QUERY_NOWPLAYING = gql`
  query Movies {
    movies {
      backdrop_path
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