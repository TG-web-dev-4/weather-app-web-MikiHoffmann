const WeatherCard = (data) => {
  
  const today = new Date();
  const cityName = data?.name;
  const icon = data?.weather[0].icon;
  const description = data?.weather.description;
  const sky = data?.weather[0].main;
  const temp = data?.main.temp;
  const tempMin = data?.main.temp_min;
  const tempMax = data?.main.temp_max;
  const humidity = data?.main.humidity;
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
export default WeatherCard
