import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.8em;
  @media only screen and (min-width: 31.25em) {
    flex-direction: row;
    justify-content: center;
  }
`;
