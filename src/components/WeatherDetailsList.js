import React from "react";
import { useState } from "react";
import { ConvertTime } from "./ConvertDate";
const WeatherDetailsList = ({ detailsData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onClickBanner = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const detailList =
    detailsData &&
    detailsData?.hourly.map((hour, index) => {
      const active = index === activeIndex ? "active" : "";
      return (
        <li className="listItem" key={hour.dt}>
          <div className={`accordionTitle ${active}`} onClick={() => onClickBanner(index)}>
            <span>
              <ConvertTime time={hour.dt} />
            </span>
            <h2>{hour.weather[0].main}</h2>
            <img
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
            <p>Temp: {hour.feels_like}&deg;C</p>
          </div>
          <div className={`accordionContent ${active}`}>
            <span>humidity: {hour.humidity} &#37;</span>
            <span>wind speed: {hour.wind_speed} km/hr</span>
          </div>
        </li>
      );
    });
  return <ul className="weatherCard">{detailList}</ul>;
};

export default WeatherDetailsList;
