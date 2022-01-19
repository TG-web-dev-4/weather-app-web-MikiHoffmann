import { ThemeProvider } from "styled-components";
import { themeDark } from "../styles/Themes";

import { StyledCard } from "../styledElements/Card.styled";
import { IconContainer } from "../styledElements/IconContainer.styled";
import { SectionTitle } from "../styledElements/Titles.styled";
import { SubTitle } from "../styledElements/Titles.styled";

export default function WeatherCard(props) {
  return (
    <StyledCard>
      <ThemeProvider theme={themeDark}>
        <SectionTitle>{props.city}</SectionTitle>
      </ThemeProvider>
      <IconContainer>
        <img src={props.icon} alt={props.description} />
        <SubTitle>
          {props.description} - {props.currentTemp} &deg; C
        </SubTitle>
      </IconContainer>
      <p>Minimum temperature: {props.minTemp} &deg; C</p>
      <p>Maximum temperature: {props.maxTemp} &deg; C</p>
      <p>Humidity: {props.humidity} &#37;</p>
    </StyledCard>
  );
}
