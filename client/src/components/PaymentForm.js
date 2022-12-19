import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost/3001/payment", {
                amount: 1599,
                id
            })

            if(response.data.success) {
                console.log("Payment Sucess");
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error");
        }
    } else {
        console.log(error.message)
    }
    }

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
             <fieldset className= "FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                </div>
        </fieldset>
        <button>Pay</button>
        </form>
       :
       <div>
        <h2>
            Enjoy your 30 day movie rental!
        </h2>
       </div>
        }
        </>
    )
};

export default PaymentForm;