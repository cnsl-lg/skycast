const ADayForecast = ({ children }) => {
  return (
    <div className="a_day_forecast">
      <h3>24-Hour Forecast</h3>
      <ul className="flex overflow-x-auto">
        {children}
      </ul>
    </div>
  );
}

export default ADayForecast;