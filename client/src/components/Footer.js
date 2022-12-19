import React from 'react';

import axios from 'axios';
import Stripe from "react-stripe-checkout";

const Footer = () => {

  const stripePublishkey = process.env.STRIPE_PUBLISH_KEY;

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
    <footer>
      <h3 className='text-center pt-4'>
        © 2022
      </h3>
      <div className='text-center pb-4'>
        < >
          <Stripe
            className='stripeBtn'
            stripeKey={`${stripePublishkey}`}
            token={tokenHandler}
          />
        </ >
        <br></br>
        <button type="button" id="installBtn">
          Click to Install!
        </button>
      </div>
      <script src="../../serviceWorker.js"></script>
      <script src="../utils/install.js"></script>
    </footer>
  )
};

export default Footer;