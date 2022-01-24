export const CurrentWeatherUrl = (apiUrl,city,apiKey) => {
    return (
        `${apiUrl}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
}

export const ForecastWeatherUrl = (apiUrl,latitude,longitude,exclude,apiKey) => {
    return (
        `${apiUrl}/data/2.5/onecall?&lat=${latitude}&lon=${longitude}&units=metric&exclude=${exclude}&appid=${apiKey}`
    )
}

