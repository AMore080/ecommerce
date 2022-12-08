import { gql } from "@apollo/client";

export const QUERY_NOWPLAYING = gql`
  query nowPlaying {
    data
      @rest(
        type: Movies
        path: "now_playing/?api_key=${process.env.API_KEY}"
      ) {
      results {
        title
        backdrop_path
      }
    }
  }
`;
