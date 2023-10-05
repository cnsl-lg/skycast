const WeatherForecastList = ({ item }) => {
  return (
    <>
      <li className="py-2 flex justify-between items-center">
        <div className="day flex items-center">
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/116.png"
            alt="weather-icon"
            className="w-8 me-2" />
          <p className="font-semibold text-sm">{`${item.date} ${item.day.condition.text}`}</p>
        </div>
        <div className="temp">
          <p className="font-semibold text-sm">
            {Math.floor(item.day.maxtemp_c)}<sup>o</sup> / {Math.floor(item.day.maxtemp_c)}<sup>o</sup>
          </p>
        </div>
      </li>
    </>
  );
}

export default WeatherForecastList;