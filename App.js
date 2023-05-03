import React from 'react';
import { useState, useEffect } from "react";

import { ApolloProvider } from 'react-apollo';
import client from './client';
import Screen from './Screen';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';



const App = async () => {
  return (
  <ApolloProvider client={client}>
    {/* <Screen/> */}
  </ApolloProvider>
);
}

export default App;
