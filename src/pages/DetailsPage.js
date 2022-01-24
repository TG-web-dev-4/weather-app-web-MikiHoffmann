//import { useState } from "react";
import UseFetch from "../hooks/UseFetch";

export default function DetailsPage({ forecast, cityName }) {
  const message = "please enter a city";

  const { data, error, isLoading, setUrl } = UseFetch();
  const test = () => {
   
    if (!cityName)
      return (
        <div className="weatherCard">
          <h2>{message}</h2>
        </div>
      );
      setUrl(forecast)
    return data
  };
  console.log(data);

  return <div>{test()}</div>;
}
