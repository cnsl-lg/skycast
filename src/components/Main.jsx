import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastList from "./WeatherForecastList";

const Main = ({ weatherLocation, weatherCurrent, weatherCondition, forecast }) => {
  return (
    <main>
      <CurrentWeather
        weatherLocation={weatherLocation}
        weatherCurrent={weatherCurrent}
        weatherCondition={weatherCondition} />
      <WeatherForecast>
        {forecast.map(item => (
          <WeatherForecastList item={item} key={item.date} />
        ))}
      </WeatherForecast>
    </main>
  );
}

export default Main;