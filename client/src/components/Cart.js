import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
require('dotenv').config();

const stripePromise = loadStripe(process.env.PUBLIC_KEY)

const Cart = () => {
    return (
        <Elements stripe={stripePromise}>
        </Elements>
    )
};

export default Cart;