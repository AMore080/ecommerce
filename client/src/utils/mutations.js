import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
     mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// it might not be movies but should we use query_singlemovie or do another separate query
export const RENT_MOVIE_ORDER = gql`
     mutation rentMovieOrder($movies: [ID]!) {
        rentMovieOrder(movies: $movies) {
            purchaseDate
            movies {
                _id
                original_title
                poster_path
            }
        }
    }
`;

// export const EXPIRE_MOVIE = gql`
//      mutation expireMovie ($movieData: inpMovieData!) {
//         expireMovie(movie) {
//             _id
//             username
//             email
//             inpMovieData {
//                 director
//                 description
//                 movieId
//                 image
//                 link
//                 title
//             }
//         }
//     }
// `;