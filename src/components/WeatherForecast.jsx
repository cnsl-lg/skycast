const WeatherForecast = ({ children }) => {
  return (
    <div className="weather_forecast">
      <div className="flex justify-between items-center">
        <h3 >3-Day Forecast</h3>
      </div>
      <ul className="divide-y divide-slate-100">
        {children}
      </ul>
    </div>
  );
}

export default WeatherForecast;