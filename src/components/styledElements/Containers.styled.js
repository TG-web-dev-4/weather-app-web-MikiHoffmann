import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.5em;

  & li {
    display: inline-block;
  }
  
  @media only screen and (min-width: 31.25em) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
