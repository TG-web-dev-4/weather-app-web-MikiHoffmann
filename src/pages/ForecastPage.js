import { useState, useEffect } from "react";

export default function ForecastPage({ forecast, cityName }) {

  const message = "please do enter a city";
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  
  useEffect (() => {
    if (!cityName) return
    if (!forecast) return;
    setIsLoading(true);
    setForecastData(null);
    setError(null);

    fetch(forecast)
      .then((response) => response.json())
      .then((forecastData) => {
        setIsLoading(false);
        if (forecastData.cod >= 400) {
          setError(forecastData.message);
          console.log(forecastData)
          return;
        }
        setForecastData(forecastData);
        console.log(forecastData)
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  },[forecast, cityName])
    
  

  const getForecast = () => {
    if (!cityName)
    return (
      <div className="weatherCard">
        <h2>{message}</h2>
      </div>
    );
    if (error)
      return (
        <div className="weatherCard">
          <h2>Error when fetching: {error}</h2>
        </div>
      );
    if (!forecastData && isLoading)
      return (
        <div className="weatherCard">
          <h2>LOADING...</h2>
        </div>
      );
    if (!forecastData)
      return (
        <div className="weatherCard">
          <h2>please select your city</h2>
        </div>
      );

    console.log(forecast);
    //return data;
  };



  return <div>{getForecast()}</div>;
}