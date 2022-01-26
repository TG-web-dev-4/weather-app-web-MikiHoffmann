import React from "react";

export default function ForecastListItem(dt, sky, icon, description, temp) {
  const date = new Date(dt);
  return (
    <>
      <p>{date.toLocaleDateString()}</p>

      <h2>{sky}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>Temp: 10&deg;C</p>
    </>
  );
}
