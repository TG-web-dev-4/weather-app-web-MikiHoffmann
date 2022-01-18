import Cards from "./WeatherList";

export default function WeatherData() {
  const weatherData = [
    {
      id: "500",
      city: "Amsterdam",
      currentTemp: "7.5",
      minTemp: "3.4",
      maxTemp: "10.01",
      humidity: "90",
      description: "light rain",
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
    },
    {
      id: "800",
      city: "San Francisco",
      currentTemp: "20.09",
      minTemp: "16.9",
      maxTemp: "24.45",
      humidity: "67",
      description: "clear sky",
      icon: "http://openweathermap.org/img/wn/01d@2x.png",
    },
  ];

  return (
    <>
      <Cards weatherItems={weatherData} />
    </>
  );
}
