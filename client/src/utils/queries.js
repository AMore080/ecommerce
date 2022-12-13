import { gql } from "@apollo/client";

export const QUERY_NOWPLAYING = gql`
  query Movies {
    movies {
      backdrop_path
      original_title
    }
  }
`;
