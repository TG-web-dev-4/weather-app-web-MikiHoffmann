import { Routes, Route } from "react-router-dom";

import CityPage from "./pages/CurrentPage";
import DetailsPage from "./pages/DetailsPage";
import ForecastPage from "./pages/ForecastPage";

import UseFetch from "./hooks/UseFetch";

import { detailsWeatherUrl } from "./apiurls/ApiUrls";
import { ForecastWeatherUrl } from "./apiurls/ApiUrls";

import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import { ConvertDate } from "./components/ConvertDate";

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
    //console.log("LAT:", latitude, "LON:", longitude);
    return (
      <div className="weatherCard">
        <p>{<ConvertDate date={data.dt} />}</p>
        <p>{today.toLocaleTimeString()}</p>

        <div className="iconContainer">
          <h2>{sky}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </div>

        <p className="mainTemp">Temp: {temp}&deg;C</p>
        <p>Min: {tempMin}&deg;C</p>
        <p>Min: {tempMax}&deg;C</p>
        <p>Humidity: {humidity}&#37;</p>
      </div>
    );
  };
  const excludeDetails = "daily,minutely,alert";
  const excludeForecast = "current,minutely,hourly,alert";
  const details = detailsWeatherUrl(
    apiUrl,
    latitude,
    longitude,
    excludeDetails,
    apiKey
  );
  const forecast = ForecastWeatherUrl(
    apiUrl,
    latitude,
    longitude,
    excludeForecast,
    apiKey
  );
  return (
    <>
      <main>
        <div className="section sectionTop">
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

          <h2 className="mainTitle">{cityName}</h2>
        </div>
        <div className="section sectionBottom">
          <Routes>
            <Route path="/" element={<CityPage getContent={getContent} />} />
            <Route
              path="/DetailsPage"
              element={<DetailsPage details={details} cityName={cityName} />}
            />
            <Route
              path="/ForecastPage"
              element={<ForecastPage forecast={forecast} cityName={cityName} />}
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
