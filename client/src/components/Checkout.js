import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from './PaymentForm';
import axios from 'axios';
import Stripe from 'react-stripe-checkout';


const STRIPE_PUBLISH_KEY = process.env.REACT_APP_STRIPE_PUBLISH_KEY;
const stripeTestPromise = loadStripe(STRIPE_PUBLISH_KEY)

const Checkout = () => {

    const handleToken = (totalAmount, token) => {
      try {
        axios.post("http://localhost:5000/api/stripe/pay", {
          token: token.id,
          amount: totalAmount
        });
      } catch (error) {
        console.log(error);
      };
    };
  
    const tokenHandler = (token) => {
      handleToken(100, token);
    }
    return (
        <Elements stripe={stripeTestPromise}>
        <div>
          <Stripe
            className='stripeBtn'
            stripeKey={`${STRIPE_PUBLISH_KEY}`}
            token={tokenHandler}
          />
        </div>
        </Elements>
    )
};

export default Checkout;