// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NextUIProvider } from '@nextui-org/react';
import './styles/App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import RentedMovies from './pages/RentedMovies';
import SearchMovies from './pages/SearchMovies';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<SearchMovies />} />
              <Route path="/rented" element={<RentedMovies />} />
              <Route path='*' element={<h1 className=''>Wrong page!</h1>} />
            </Routes>
            <Footer />
          </>
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
