import styled from "styled-components";

export const SearchBar = styled.input`
  width: 100%;
  padding: 0.2em .5em;
  border: none;
  box-shadow: inset 1px 1px 3px ${({ theme }) => theme.colors.myBlack};
`;
