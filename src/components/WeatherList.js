const WeatherList = ({ forecastData }) => {
  return (
    <ul>
      {forecastData &&
        forecastData?.daily.map((day) => (
          <li className="forecastListItem" key={day.dt}>
            <p>{day.dt.toLocaleString()}</p>

            <h2>{day.weather[0].main}</h2>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>Temp: {day.temp.day}&deg;C</p>
          </li>
        ))}
    </ul>
  );
};

export default WeatherList;
