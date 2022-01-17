import { StyledHeader } from "../styledElements/Header.styled";
import { SearchBar } from "../styledElements/SearchBars.styled";
import { SubmitButton } from "../styledElements/Buttons.styled";
import React from "react";
export default function Header() {
  return (
      <StyledHeader>
          <SearchBar/>
        <SubmitButton>Submit</SubmitButton>
      </StyledHeader>
  );
}
