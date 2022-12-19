import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query getMe {
  me {
    _id
    password
    email
    savedMovies {
      id
      original_title
      overview
      poster_path
    }
    username
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
`;

export const QUERY_SEARCHMOVIE = gql`
query searchMovie($search: String!) {
  searchMovie(search: $search) {
    poster_path
    id
    original_title
    overview
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($movies: [ID]!) {
    checkout(movies: $movies) {
      rentDay
    }
  }
`

export const QUERY_DISCOVER = gql`
  query movieDiscover {
    movieDiscovery {
      id
      original_title
      overview
      poster_path
    }
  }
`