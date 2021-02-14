import React from 'react';
import {graphql} from 'gatsby';
import Navigation from "../../components/Navigation"

export const query = graphql `
query ($id: String = "") {
    contentfulCity(id: {eq: $id}) {
      city
      description
      location {
        lat
        lon
      }
    }
  }
`

const Locations = ({data}) => {
    return (
        <div>
            <Navigation />
            <h1>
                Welcome to our {data.contentfulCity.city} location.
            </h1>
            <p>{data.contentfulCity.description}</p>
        </div>
    );
}

export default Locations;
