import { useReducer } from 'react';
import { ADD_TO_CART, UPDATE_MOVIES } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MOVIES:
            return {
                ...state,
                // this variable might be singlemovies or something like that
                movies: [...action.movies]
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                // movie might not be correct variable yet
                cart: [...state.cart, action.movie],
            };
        default:
            return state;
    }
};

export function useMovieReducer(initialState) {
    return useReducer(reducer, initialState)
};