import { StyledNavBar } from "../styledElements/NavBar.styled";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">My City</Link>
        </li>
        <li>
          <Link to="/WeatherOverview">Overview</Link>
        </li>
        <li>
          <Link to="/WeatherDetails">Details</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
