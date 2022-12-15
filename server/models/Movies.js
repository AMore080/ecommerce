const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedmovies` array in User.js
const movieSchema = new Schema({
  director: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});

const MovieList = model('MovieList', movieSchema)

module.exports = MovieList;
