import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: .3em auto;
    li {
      font-size: 1.5em;
    }
    @media only screen and (min-width: 31.25em) {
      justify-content: space-evenly;
    }
  }
`;
