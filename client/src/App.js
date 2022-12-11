import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { NextUIProvider } from '@nextui-org/react';

// Pages
import Home from './pages/Home';

// const restLink = new RestLink({ uri: "https://api.themoviedb.org/3/movie/" });

//KEEP IN MIND THAT THE URI IS NOT PERMANENT. THIS WILL BE CHANGED TO '/graphql' WHEN WE PUSH TO HEROKU
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
      <Router>
        <div>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </Router>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
