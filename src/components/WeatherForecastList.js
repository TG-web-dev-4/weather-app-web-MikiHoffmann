import React from "react";
import { useState } from "react";
import { ConvertDate } from "./ConvertDate";
const WeatherForecastList = ({ forecastData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onClickBanner = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const forecastList =
    forecastData &&
    forecastData?.daily.map((day, index) => {
      const active = index === activeIndex ? "active" : "";
      return (
        <li className="listItem" key={day.dt}>
          <div
            className={`accordionTitle ${active}`}
            onClick={() => onClickBanner(index)}
          >
            <ConvertDate date={day.dt} />
            <h3>{day.weather[0].main}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>Temp: {Math.round(day.temp.day)}&deg;C</p>
          </div>

          <div className={`accordionContent ${active}`}>
            <span>morning: {Math.floor(day.feels_like.morn)}&deg;C</span>
            <span>day:{Math.floor(day.feels_like.day)}&deg;C</span>
            <span>evening:{Math.floor(day.feels_like.eve)}&deg;</span>
            <span>night:{Math.floor(day.feels_like.night)}&deg;C</span>
          </div>
        </li>
      );
    });

  return <ul className="weatherCard">{forecastList}</ul>;
};

export default WeatherForecastList;
