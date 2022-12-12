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

export const RENT_MOVIE = gql`
     mutation rentMovie($movieData: inpMovieData!) {
        rentMovie(movieData: $movieData) {
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

export const EXPIRE_MOVIE = gql`
     mutation expireMovie ($movieData: inpMovieData!) {
        expireMovie(movie) {
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