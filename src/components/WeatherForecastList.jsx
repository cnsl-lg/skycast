const WeatherForecastList = ({ item }) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const getDay = new Date(item.date)
  const dayName = weekday[getDay.getDay()]

  return (
    <li className="weather_forecast_item">
      <div className="flex-none flex items-center">
        <span>{dayName}</span>
      </div>
      <div className="grow flex items-center justify-center">
        <img
          src="//cdn.weatherapi.com/weather/64x64/day/116.png"
          alt="weather-icon"
          className="w-8 h-8 me-2" />
        <p>{item.day.condition.text}</p>
      </div>
      <div className="flex-none">
        <p>
          {Math.floor(item.day.maxtemp_c)}<sup>o</sup> / {Math.floor(item.day.maxtemp_c)}<sup>o</sup>
        </p>
      </div>
    </li>
  );
}

export default WeatherForecastList;