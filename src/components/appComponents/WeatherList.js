import { StyledList } from "../styledElements/List.styled";
import WeatherCard from "./WeatherCard";
export default function Cards(props) {
  return (
    <StyledList>
      {props.weatherItems.map((weather,main,id,name) => (
        <WeatherCard
          key={id}
          city={name}
          description={weather.description}
          icon={weather.icon}
          currentTemp={main.temp}
          minTemp={main.temp_min}
          maxTemp={main.temp_max}
          humidity={main.humidity}
        />
      ))}
    </StyledList>
  );
}
