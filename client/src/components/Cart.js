import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
require('dotenv').config();

const stripePromise = loadStripe(process.env.PUBLIC_KEY)

const Cart = () => {
    
};

export default Cart;