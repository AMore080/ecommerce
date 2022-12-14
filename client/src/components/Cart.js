import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { loadStripe } from '@stripe/stripe-js';
require('dotenv').config();

const stripePromise = loadStripe(process.env.PUBLIC_KEY)

const Cart = () => {
    

    return (
       <div></div>
    )
};

export default Cart;