export const detailsWeatherUrl = (apiUrl,latitude,longitude,excludeDetails,apiKey) => {
    return (
        `${apiUrl}/data/2.5/onecall?units=metric&lat=${latitude}&lon=${longitude}&exclude=${excludeDetails}&appid=${apiKey}`
    )
}
export const ForecastWeatherUrl = (apiUrl,latitude,longitude,excludeForecast,apiKey) => {
    return (
        `${apiUrl}/data/2.5/onecall?units=metric&lat=${latitude}&lon=${longitude}&exclude=${excludeForecast}&appid=${apiKey}`
    )
}

