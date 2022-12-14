import { loadStripe } from '@stripe/stripe-js';
require('dotenv').config();

const stripePromise = loadStripe(process.env.PUBLIC_KEY)

const Checkout = () => {
    if(!stripePromise) {
        stripePromise
    }
}
const button = document.querySelector("button");
button.addEventListener("click", () => {
    fetch('http://localhost:3000/checkout-session', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: ({
            items: []
        })
    }).then(res => {
        if(res.ok) return res.json
        return res.json().then(json => Promis.reject(json))
    }).then(({ url }) => {
        console.log(url);
    }).catch(e => {
        console.log(e.error);
    })
})

export default Checkout;