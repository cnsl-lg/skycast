import AirCondition from "./AirCondition";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastList from "./WeatherForecastList";

const Aside = ({ forecast }) => {
  return (
    <>
      <aside className="flex flex-col gap-5">
        <AirCondition />
        <WeatherForecast>
          {forecast.map(item => (
            <WeatherForecastList item={item} key={item.date} />
          ))}
        </WeatherForecast>
      </aside>
    </>
  );
}

export default Aside;