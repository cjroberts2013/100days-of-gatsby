import * as React from "react";
import {Link} from "gatsby";
import Navigation from "./../../components/Navigation";

const Locations = () => {
  return (
    <div>
    <Navigation />
      <h1>Our Store Locations</h1>
      <p>We currently have three store locations in the following cities...</p>
      <ul>
        <li><Link to="/locations/houston">Houston</Link></li>
        <li><Link to="/locations/austin">Austin</Link></li>
        <li><Link to="/locations/dallas">Dallas</Link></li>
      </ul>
    </div>
  )
}

export default Locations;