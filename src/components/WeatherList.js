const WeatherList = ({ forecastData }) => {
  return (
    <ul>
      {forecastData &&
        forecastData?.daily.map((day) => (
          <li key={day.dt}>
            <div className="weatherCard">
              <p>{day.dt.toLocaleString()}</p>
              <div className="iconContainer">
                <h2>{day.weather[0].main}</h2>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
              </div>

              <p>Temp: {day.temp.day}&deg;C</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default WeatherList;
