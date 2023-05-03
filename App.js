import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';

const App = () => (
  <ApolloProvider client={client}>
    hii
  </ApolloProvider>
);

export default App;