import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SearchLocation from "./SearchLocation";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastList from "./WeatherForecastList";
import ADayForecast from "./ADayForecast";
import ADayForecastList from "./ADayForecastList";
import Astro from "./Astro";
import MoreInfo from "./MoreInfo";
import useFetch from "./custom_hook/useFetch";

export default function App() {
  const [location, setLocation] = useState('jakarta')
  const [changeLocation, setChangeLocation] = useState('')
  const { weatherLocation, weatherCurrent, weatherCondition, forecast, forecastDay, astro } = useFetch(changeLocation, location)

  const handleAddLocation = (locationX) => {
    setChangeLocation(locationX)
  }

  return (
    <div className="container mx-auto p-5 flex flex-col gap-5 xl:flex-row">
      <div className="lg:w-[35%]">
        <header>
          <SearchLocation onAddLocation={handleAddLocation} location={location} setLocation={setLocation}/>
        </header>
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
      </div>
      <div className="lg:w-[65%]">
        <aside className="flex flex-col gap-5">
          <ADayForecast>
            {forecastDay.map(item => (
              <ADayForecastList item={item} key={item.time_epoch} />
            ))}
          </ADayForecast>
          <div className="flex flex-col gap-5 lg:flex-row">
            <Astro astro={astro} />
            <MoreInfo weatherCurrent={weatherCurrent} />
          </div>
        </aside>
        <footer className="lg:text-slate-100 lg:bg-sky-700 px-5 py-4 rounded-xl mt-5 flex flex-col gap-5 items-center justify-between text-xs lg:flex-row">
          <p className="font-semibold flex items-center">Date provide in part by <a href="https://www.weatherapi.com/" target="_blank"><img src="weatherapi_logo2-removebg-preview.png" alt="weather api logo" className="w-16 ms-2" /></a></p>
          <p>Created by <span className="font-semibold">evanalifian</span></p>
        </footer>
      </div>
    </div>
  )
}
