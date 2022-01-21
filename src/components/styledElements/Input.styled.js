import styled from "styled-components";

export const StyledSearchBar = styled.input`
  width: 100%;
  padding: 0.2em 0.3em;
  font-size: 1.3em;
  border: none;
  border-radius: 3px;
  box-shadow: inset 1px 1px 3px ${({ theme }) => theme.colors.myBlack};
  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.font};
  }
`;
