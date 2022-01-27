import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link to="/">Current</Link>
        </li>
        <li>
          <Link to="/DetailsPage">Details</Link>
        </li>
        <li>
          <Link to="/ForecastPage">Forecast</Link>
        </li>
      </ul>
    </div>
  );
}
