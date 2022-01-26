import { useState, useEffect } from "react";
import WeatherDetailsList from "../components/WeatherDetailsList";

export default function DetailsPage({ details, cityName }) {
  const message = "please do enter a city";
  const [detailsData, setDetailsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (!cityName) return;
    if (!details) return;
    setIsLoading(true);
    setDetailsData(null);
    setError(null);

    fetch(details)
      .then((response) => response.json())
      .then((detailsData) => {
        setIsLoading(false);
        if (detailsData.cod >= 400) {
          setError(detailsData.message);
          console.log(detailsData);
          return;
        }
        setDetailsData(detailsData);
        console.log(detailsData);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [details, cityName]);

  const getDetails = () => {
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
    if (!detailsData && isLoading)
      return (
        <div className="weatherCard">
          <h2>LOADING...</h2>
        </div>
      );
    if (!detailsData)
      return (
        <div className="weatherCard">
          <h2>please select your city</h2>
        </div>
      );

    console.log(detailsData);
    return <WeatherDetailsList detailsData={detailsData} />;
  };

  return (
    <>
      <div className="weathercard">{getDetails()}</div>
    </>
  );
}
