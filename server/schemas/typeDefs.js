const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Set up Auth to handle data returned from a user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
     me: User
  }

  type User {
    _id: ID!
    username: String!
    email: String
    savedMovies: [Movie]
    rentalStart: Date
  }

  type Movie {
    movieId: ID!
    director: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  input inpMovieData {
    director: [String]
    description: String!
    movieId: String!
    image: String
    link: String
    title: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(movieData: inpMovieData!): User
    removeMovie(movieId: ID!): User
  }



`;
module.exports = typeDefs;