import Cards from "./WeatherList";
import { useState, useEffect } from "react";

export default function WeatherDataLocation() {
  const [weatherDataLocation, setWeatherDataLocation] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherDataLocation(result);
        //console.log(result);
      });
  }, []);

  console.log(weatherDataLocation);
  return (
    <>
      <Cards weatherItems={weatherDataLocation} />
    </>
  );
}
