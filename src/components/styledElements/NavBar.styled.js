import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    li {
      font-size: 1.5em;
      text-shadow: 0px 1px 20px blue, -1px 0px 20px blue, 0px -1px 20px blue,
        -1px -1px 20px blue;
    }
  }
`;
