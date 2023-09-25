const WeatherForecast = ({ children }) => {
  return (
    <div className="weather-forecast text-slate-100 bg-sky-800 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font font-medium">3-day forecast</h3>
        {/* <a href="#">See detail</a> */}
      </div>
      <ul className="divide-y divide-slate-100">
        {children}
      </ul>
    </div>
  );
}

export default WeatherForecast;