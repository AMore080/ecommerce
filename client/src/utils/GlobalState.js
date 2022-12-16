import React, { createContext, userContext } from "react";
import { useMovieReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useMovieReducer({
        // this might not be the right variable yet
        movies: [],
        cart: [],
        cartOpen: false,
    });

    return <Provider value={[state, dispatch]} {...props} />; 
};

const useStoreContext = () => {
    return useStoreContext(StoreContext);
};

export { StoreProvider, useStoreContext };