import { ThemeProvider } from "styled-components";
import { themeDark } from "../../styles/Themes";

import { StyledCard } from "../styledElements/Card.styled";
import { SectionTitle } from "../styledElements/Titles.styled";
import { IconContainer } from "../styledElements/Containers.styled";
import { SubTitle } from "../styledElements/Titles.styled";

const WeatherCard = ({
  cityName,
  icon,
  sky,
  description,
  temp,
  tempMin,
  tempMax,
  humidity,
}) => {
  const currentDate = new Date();
  return (
    <>
      <StyledCard>
        <ThemeProvider theme={themeDark}>
          <SectionTitle>{cityName}</SectionTitle>
          <p>
            {currentDate.toLocaleDateString()} -
            {currentDate.toLocaleTimeString()}
          </p>
        </ThemeProvider>
        <IconContainer>
          <img
            src={`${process.env.REACT_APP_API_ICON_URL}${icon}@2x.png`}
            alt={description}
          />
          <ThemeProvider theme={themeDark}>
            <SubTitle>
              {sky} - {temp}&deg;C
            </SubTitle>
          </ThemeProvider>
        </IconContainer>
        <p>Min: {tempMin} &deg; C</p>
        <p>Max: {tempMax} &deg; C</p>
        <p>Humidity: {humidity} &#37;</p>
      </StyledCard>
    </>
  );
};

export default WeatherCard;
