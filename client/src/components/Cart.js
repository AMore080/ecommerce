import React, { useEffect} from 'react';
import { useLazQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART } from '../utils/actions';

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    // const [getCheckout, {data}] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        async function getCart () {
            dispatch({ type: ADD_TO_CART, movies: [...cart] });
        }

        if (state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    return (
        
    )

}



