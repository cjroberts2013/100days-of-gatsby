import * as React from "react";
import {Link} from "gatsby";
import Navigation from "./../../components/Navigation";
import {graphql} from "gatsby";

export const query = graphql`
query MyQuery {
  allContentfulCity {
    edges {
      node {
        city
        description
        location {
          lat
          lon
        }
      }
    }
  }
}
`

const Locations = ({data}) => {
  return (
    <div>
      <Navigation />
      <h1>Our Store Locations</h1>
      <p>We currently have three store locations in the following cities...</p>
      
      <ul>
        {
          data.allContentfulCity.edges.map(({node:city}) => (
            <li key={city.city}>
              <Link to={city.city.toLowerCase()}>{city.city}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Locations;