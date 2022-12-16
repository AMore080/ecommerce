import React, { useEffect} from 'react';
import { useLazQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, {data}] = useLazyQuery(QUERY_CHECKOUT)
}

