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
