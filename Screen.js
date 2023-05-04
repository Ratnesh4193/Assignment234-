import { useEffect, useState } from "react";
import "./Screen.css"

import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import client from "./client";

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

const GET_COUNTRY_DETAILS = gql`
  query Country($countryCode: ID!) {
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


const Screen = () => {
  const [country, setCountry] = useState("IN");
  
  const [detail, setDetail] = useState();
 
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  useEffect(()=>{
    getDetails("IN")
  },[])

  const getDetails = async (country) => {
    const { data } = await client.query({
      query: GET_COUNTRY_DETAILS,
      variables: { countryCode: country },
    });
    setDetail(data.country)
    console.log(data.country)
  };
  return (
    <>
      {data ? (
        <section >
          <div>
          <div class="card">
            Select Country
            <select
              name="pets"
              id="pet-select"
              onChange={(e) => {
                setCountry(e.target.value);
                getDetails(e.target.value);
              }}
              defaultValue={country}
            >
              {data.countries.map((country, i) => {
                return (
                  <option key={i} value={country.code}>
                    {country.name}
                  </option>
                );
              })}
            </select>
            </div>
            <div class="card">
            
                <h1>Country Details : {detail.code}</h1>
                <p class="title">Name : {detail.name}</p>
                <p>Phone Code : {detail.phone}</p>
                <p>Currency : {detail.currency}</p>
                <p>Native : {detail.native}</p>
            </div>  
          </div>
        </section>
        
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Screen;
