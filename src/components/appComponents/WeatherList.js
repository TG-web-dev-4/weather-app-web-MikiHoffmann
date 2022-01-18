import { StyledList } from "../styledElements/List.styled";
import WeatherCard from "./WeatherCard";
export default function Cards(props) {
  return (
    <StyledList>
      {props.weatherItems.map((weather) => (
        <WeatherCard
          key={weather.id}
          city={weather.city}
          description={weather.description}
          icon={weather.icon}
          currentTemp={weather.currentTemp}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          humidity={weather.humidity}
        />
      ))}
    </StyledList>
  );
}
