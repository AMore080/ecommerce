// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RestLink } from "apollo-link-rest";
import { NextUIProvider } from '@nextui-org/react';
import './styles/App.css'
// Import components
import Header from './components/Nav';
import Footer from './components/Footer';
// Import pages
import RentedMovies from './pages/RentedMovies';
import SearchMovies from './pages/SearchMovies';
import SignIn from './pages/SignIn';
import Success from './pages/Success';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const promise = loadStripe("pk_test_51MCvg5EebBOxf0reCY0E9ZTk68FifUPnphbPubajAzjyN4ciywW3h6knpP0Cj79XuN5AmxIORTa53uPafWXF8lsL00Y7TL6PL0");

const restLink = new RestLink({ uri: "https://api.themoviedb.org/3/movie/" });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const combinedLink = authLink.concat(httpLink)

const client = new ApolloClient({
  link: ApolloLink.split(operation =>
    operation.getContext().clientName === "@rest",

    restLink, // Apollo will send to this if clientName is "@rest"

    combinedLink // Otherwise will send to this
  ),
  cache: new InMemoryCache({
    addTypename: false
  }),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Router>
          <>
          <Elements stripe={promise}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<SearchMovies />} />
                <Route path="/profile" element={<RentedMovies />} />
                <Route path="/checkout" element={<RentedMovies />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/success" element={<Success />} />
                <Route path='*' element={<h1>Wrong page!</h1>} />
              </Routes>

            </main>
            <Footer />
            </Elements>
          </>
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;