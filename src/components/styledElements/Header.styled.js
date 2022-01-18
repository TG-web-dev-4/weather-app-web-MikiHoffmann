import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.5em;
  width: 100%;
  padding: 0.8em;
  h1 {
    grid-area: 1/1/1/11;
  }
  input {
    grid-area: 2/1/2/11;
  }
  button:nth-of-type(1) {
    grid-area: 3/3/4/5;
  }
  button:nth-of-type(2) {
    grid-area: 3/6/4/8;
  }
  nav {
    grid-area: 4/1/5/11;
  }
  @media only screen and (min-width: 31.25em) {
    grid-template-rows: 1fr 1fr 1fr;
    h1 {
      grid-area: 1/1/1/11;
    }
    input {
      grid-area: 2/1/2/7;
    }
    button:nth-of-type(1) {
      grid-area: 2/7/3/9;
    }
    button:nth-of-type(2) {
      grid-area: 2/9/3/11;
    }
    nav {
      grid-area: 3/1/4/11;
    }
  }
`;