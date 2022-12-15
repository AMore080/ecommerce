const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY)
const { MovieList } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id }).select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('You are not logged in!');

        },
        // order: async (parent, { _id }, context) => {

        // },
        // checkout: async (parent, args, context) => {
        //     const url = new URL(context.headers.referer).origin;
        //     const order = new Order({ products: args.products });
        //     const line_items = [];

        //     const session = await stripe.checkout.sessions.create({
        //         payment_method_types: ['card'],
        //         line_items,
        //         mode: 'payment',
        //         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        //         cancel_url: `${url}/`
        //     });

        //     return { session: session.id };
        // },
        movies: async (parent, args, { dataSources }) => {
            try {
                const allMovies = await dataSources.MoviesAPI.getNowPlaying();
                return allMovies.map(movie => ({
                    id: movie.id,
                    backdrop_path: movie.backdrop_path,
                    original_title: movie.original_title,
                    overview: movie.overview,
                }))
            } catch (error) {
                throw error;
            }
        },
        singleMovie: async (parent, args, { dataSources }) => {
            try {
                const singleMovie = await dataSources.MoviesAPI.getMovie(args.id);
                return singleMovie;
            } catch (error) {
                throw error;
            }
        }
    },

    Mutation: {
        addMovieWatchList: async (parent, args, { dataSources }) => {
            const addedMovie = await MovieList.create(args);
            return addedMovie;
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return {
                user, token
            }
        }
    }

}

module.exports = resolvers;