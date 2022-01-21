import WeatherCard from "./WeatherCard";

import { StyledList } from "../styledElements/List.styled";
import { FlexContainer } from "../styledElements/Containers.styled";

const WeatherList = ({ weathers }) => {
  return (
    <>
      <StyledList>
        {weathers.map(({ dt, name, main, weather }) => (
          <FlexContainer key={weather.id}>
            <WeatherCard
              cityName={name}
              dt={dt * 1000}
              icon={weather[0].icon}
              description={weather.description}
              sky={weather[0].main}
              temp={main.temp}
              tempMin={main.temp_min}
              tempMax={main.temp_max}
              humidity={main.humidity}
            />
          </FlexContainer>
        ))}
      </StyledList>
    </>
  );
};

export default WeatherList;