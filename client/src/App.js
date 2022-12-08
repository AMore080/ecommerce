import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RestLink } from "apollo-link-rest";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

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
