const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Set up Auth to handle data returned from a user login
  type Auth {
    token: ID!
    user: User
  }

  type result {
    backdrop_path: String!
    original_title: String!
    overview: String!
    id: ID!
  }

  type genre {
    id: ID!
    name: String!
  }

  type SingleMovie {
    id: ID!
    original_title: String!
    overview: String!
    poster_path: String!
  }

  type Query {
     me: User
     movies: [result]
     singleMovie(id: ID!): SingleMovie
  }

  type Mutation {
    addMovieWatchList(id: String!, original_title: String!, overview: String!, poster_path: String!): SingleMovie
  }

  type User {
    _id: ID!
    username: String!
    email: String
  }

  input inpMovieData {
    director: [String]
    description: String!
    movieId: String!
    image: String
    link: String
    title: String!
  }
`

// type Mutation {
//   addMovie(title: String!, id: ID!, poster_path: String!)
// }

module.exports = typeDefs;

//    login(email: String!, password: String!): Auth (removed  line from mutation for now)     addUser(username: String!, email: String!, password: String!): Auth
