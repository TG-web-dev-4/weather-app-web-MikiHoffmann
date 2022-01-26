import { ConvertDate } from "./ConvertDate";
const WeatherForecastList = ({ forecastData }) => {
  return (
    <ul>
      {forecastData &&
        forecastData?.daily.map((day) => (
          <li className="forecastListItem" key={day.dt}>
            <div>
              <ConvertDate date={day.dt} />
              <h3>{day.weather[0].main}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <p>Temp: {Math.round(day.temp.day)}&deg;C</p>
            </div>

            <div>
              <span>morning: {Math.floor(day.feels_like.morn)}&deg;C</span>
              <span>day:{Math.floor(day.feels_like.day)}&deg;C</span>
              <span>evening:{Math.floor(day.feels_like.eve)}&deg;</span>
              <span>night:{Math.floor(day.feels_like.night)}&deg;C</span>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default WeatherForecastList;
