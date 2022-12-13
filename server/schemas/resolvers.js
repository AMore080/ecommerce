const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY)

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user.id }).select('-password');

                return userData;
            }

            throw new AuthenticationError('You are not logged in!');

        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('your email does not exist');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('your password is invalid');
            }

            const token = signToken(user);
            return { token, user };
        },

        saveMovies: async (parent, { movieData }, context) => {
            if (context.user) {
                const updateUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedMovies: movieData } },
                    { new: true }
                );
                return updateUser;
            }
        },

        removeMovie: async (parent, { movieId }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedMovies: movieId } },
                    { new: true }
                );
                return updateUser;
            }
        },

    },
};

module.exports = resolvers;