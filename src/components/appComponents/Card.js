import React from "react";
import { ThemeProvider } from "styled-components";
import { themeDark } from "../styles/Themes";
import { StyledCard } from "../styledElements/Card.styled";
import { SectionTitle } from "../styledElements/Titles.styled";

export default function Card() {
  return (
    <StyledCard>
      <ThemeProvider theme={themeDark}>
        <SectionTitle>Title</SectionTitle>
      </ThemeProvider>
      <p>ssdgbsk</p>
      <p>ssdgbsk</p>
      <p>ssdgbsk</p>
      <p>ssdgbsk</p>
      <p>ssdgbsk</p>
    </StyledCard>
  );
}
