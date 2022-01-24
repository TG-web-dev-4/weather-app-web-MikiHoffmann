import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CityPage from "./pages/CurrentPage";
import DetailsPage from "./pages/DetailsPage";
import ForecastPage from "./pages/ForecastPage";
import SearchBar from "./components/SearchBar";
import UseFetch from "./hooks/UseFetch";
import { ForecastWeatherUrl } from "./apiurls/ApiUrls";
//import { useState } from "react";
function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const today = new Date();
  const { data, error, isLoading, setUrl } = UseFetch();
  const cityName = data?.name;
  const icon = data?.weather[0].icon;
  const description = data?.weather.description;
  const sky = data?.weather[0].main;
  const temp = data?.main.temp;
  const tempMin = data?.main.temp_min;
  const tempMax = data?.main.temp_max;
  const humidity = data?.main.humidity;
  const longitude = data?.coord.lon;
  const latitude = data?.coord.lat;

  const getContent = () => {
    if (error)
      return (
        <div className="weatherCard">
          <h2>Error when fetching: {error}</h2>
        </div>
      );
    if (!data && isLoading)
      return (
        <div className="weatherCard">
          <h2>LOADING...</h2>
        </div>
      );
    if (!data)
      return (
        <div className="weatherCard">
          <h2>please select your city</h2>
        </div>
      );
    //console.log(data);
    console.log(latitude);
    return (
      <div className="weatherCard">
        <h2 className="subTitle">{cityName}</h2>
        <p>
          {today.toLocaleDateString()} - {today.toLocaleTimeString()}
        </p>
        <div className="iconContainer">
          <h2>{sky}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </div>

        <p>Temp: {temp}&deg;C</p>
        <p>Min: {tempMin}&deg;C</p>
        <p>Min: {tempMax}&deg;C</p>
        <p>Humidity: {humidity}&deg;C</p>
      </div>
    );
  };
  const exclude = "current,minutely,alert";

  const forecast = ForecastWeatherUrl(
    apiUrl,
    longitude,
    latitude,
    exclude,
    apiKey
  );

  return (
    <>
      <div className="mainTitle">
        <h1>My weather</h1>
      </div>
      <SearchBar
        getWeatherData={(city) =>
          setUrl(
            `${apiUrl}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          )
        }
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<CityPage getContent={getContent} />} />
        <Route
          path="/DetailsPage"
          element={<DetailsPage forecast={forecast} 
          cityName={cityName}/>}
        />
        <Route path="/ForecastPage" element={<ForecastPage />} />
      </Routes>
    </>
  );
}

export default App;
