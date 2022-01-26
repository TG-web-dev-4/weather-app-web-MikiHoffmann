import React from "react";
import { ConvertTime } from "./ConvertDate";
const WeatherDetailsList = ({ detailsData }) => {
  return (
    <ul>
      {detailsData &&
        detailsData?.hourly.map((hour) => (
          <li className="forecastListItem" key={hour.dt}>
            <div>
              <span><ConvertTime time={hour.dt} /></span>
              <h2>{hour.weather[0].main}</h2>
              <img
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt={hour.weather[0].description}
              />
              <p>Temp: {hour.feels_like}&deg;C</p>
            </div>
            <div>
              <span>humidity: {hour.humidity} &#37;</span>
              <span>wind speed: {hour.humidity} bfr</span>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default WeatherDetailsList;
