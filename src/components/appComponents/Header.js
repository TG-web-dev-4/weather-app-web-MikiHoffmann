import { StyledHeader } from "../styledElements/Header.styled";
import { MainTitle } from "../styledElements/Titles.styled";
import { SearchBar } from "../styledElements/Input.styled";
import { SubmitButton } from "../styledElements/Buttons.styled";
import { CancelButton } from "../styledElements/Buttons.styled";
import NavBar from "./NavBar";

import { ThemeProvider } from "styled-components";
import { themeLight } from "../styles/Themes";
import { themeDark } from "../styles/Themes";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <MainTitle>Weather forecast</MainTitle>
        <SearchBar placeholder="enter your city here" />
        <ThemeProvider theme={themeLight}>
          <SubmitButton>Submit</SubmitButton>
        </ThemeProvider>
        <ThemeProvider theme={themeDark}>
          <CancelButton>Cancel</CancelButton>
        </ThemeProvider>
        <NavBar/>
      </StyledHeader>
    </>
  );
}
