const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type data {
      results: [result],
    }

    type result {
      backdrop_path: String!
      original_title: String!
    }

    type Query {
      movies: [result]
    }
`

module.exports = typeDefs;