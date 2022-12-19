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
// import Home from './pages/Home';
import Success from './pages/Success';

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
            <Header />
            <main>
              <Routes>
              <Route path="/" element={<SearchMovies />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/profile" element={<RentedMovies />} />
              <Route path="/checkout" element={<RentedMovies />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/success" element={<Success />} />
              <Route path='*' element={<h1>Wrong page!</h1>} />
            </Routes>
            
            </main>
            <Footer />
          </>
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;