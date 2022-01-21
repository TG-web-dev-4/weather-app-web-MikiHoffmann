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
export const SearchContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows:  1fr 1fr;
grid-gap: .8em;
input {
  grid-area: 1/1/2/3;
}
button {
  grid-area: 2/1/3/3;
}
@media only screen and (min-width: 31.25em) {
  grid-template-rows: 1f;
  input {
    grid-area: 1/1/2/2;
  }
  button {
    grid-area: 1/2/2/3
  }
}
`
export const IconContainer = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: repeat(10, 1fr);
width: 100%;
img {
    width: 100%;
grid-area: 1/5/3/11;
}
h3 {
    position: relative;
    width: 100%;
    grid-area: 1/1/2/11;
    align-self: flex-end;
    font-size: 1.5em;
    line-height: 4em;
    z-index: 1;
}
`