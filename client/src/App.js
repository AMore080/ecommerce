// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NextUIProvider } from '@nextui-org/react';
import { RestLink } from "apollo-link-rest";
import './styles/App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import RentedMovies from './pages/RentedMovies';
import SearchMovies from './pages/SearchMovies';

// Pages
import Home from './pages/Home';

const restLink = new RestLink({ uri: "https://api.themoviedb.org/3/movie/" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Router>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<SearchMovies />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<RentedMovies />} />
              <Route path='*' element={<h1>Wrong page!</h1>} />
            </Routes>
            <Footer />
          </>
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
