import { useState, useEffect } from "react"

const useFetch = ( changeLocation, location ) => {
  const [weatherLocation, setWeatherLocation] = useState({})
  const [weatherCurrent, setWeatherCurrent] = useState({})
  const [weatherCondition, setWeatherCondition] = useState({})
  const [forecast, setForecast] = useState([])
  const [forecastDay, setForecastDay] = useState([])
  const [astro, setAstro] = useState({})

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=dde6f13080d34176b63135831232307&days=4&aqi=yes&q=${changeLocation === '' ? location : changeLocation}`)
      .then(res => res.json())
      .then(res => {
        setWeatherLocation(res.location)
        setWeatherCurrent(res.current)
        setWeatherCondition(res.current.condition)
        setForecast(res.forecast.forecastday)
        setForecastDay(res.forecast.forecastday[0].hour)
        setAstro(res.forecast.forecastday[0].astro)
      })
      .catch(err => console.log(err))
  }, [changeLocation])

  return { weatherLocation, weatherCurrent, weatherCondition, forecast, forecastDay, astro }
}

export default useFetch;