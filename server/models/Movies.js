const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedmovies` array in User.js
const movieSchema = new Schema({
  original_title: {
    type: String,
    required: true,
  },
  // saved movie id from imdb
  id: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  }
});

const MovieList = model('MovieList', movieSchema)

module.exports = MovieList;
