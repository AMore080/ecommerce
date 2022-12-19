const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type result {
    backdrop_path: String!
    original_title: String!
    id: ID!
  }

  type SingleMovie {
    id: ID!
    original_title: String!
    overview: String!
    poster_path: String!
  }

  type SearchMovie {
    id: ID!
    original_title: String
    poster_path: String
    overview: String!
  }

  type Query {
     me: User
     movies: [result]
     singleMovie(id: ID!): SingleMovie
     searchMovie(search: String!): [SearchMovie]
     movieDiscovery: [SearchMovie]
  }

  type Mutation {
    addMovieWatchList(movieData: inpMovieData): User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedMovies: [SingleMovie]
  }

  input inpMovieData {
    id: ID!
    original_title: String
    poster_path: String
    overview: String!
  }
`
  // type Mutation {
  //   addMovie(title: String!, id: ID!, poster_path: String!)
  // }

module.exports = typeDefs;
