const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type nowPlaying {
        id: ID!
        original_title: String!
        backdrop_path: String!
    }
`

module.exports = typeDefs;