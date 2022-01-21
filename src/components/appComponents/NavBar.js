import { StyledNavBar } from "../styledElements/NavBar.styled";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/WeatherMyCity">My city</Link>
        </li>
        <li>
          <Link to="/WeatherDetails">Details</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
}
