import React from 'react';
import { useState, useEffect } from "react";

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';


const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

const GET_COUNTRY_DETAILS = gql`
  query Country($countryCode: String!) {
    country(code: $countryCode) {
      name
      native
      emoji
      currency
      code
      phone
      languages {
        code
        name
      }
    }
  }
`;

const Screen = async () => {
  return (
  <p>Screen</p>
);
}

export default Screen;
