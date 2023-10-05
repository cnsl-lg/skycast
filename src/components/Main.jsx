import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastList from "./WeatherForecastList";

const Main = ({ forecast }) => {
  return (
    <main>
      <CurrentWeather />
      <WeatherForecast>
        {forecast.map(item => (
          <WeatherForecastList item={item} key={item.date} />
        ))}
      </WeatherForecast>
    </main>
  );
}

export default Main;