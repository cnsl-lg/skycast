import { createContext, useState } from "react";
import useFetch from "./custom_hook/useFetch";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

export const AboutLocation = createContext(null)

export default function App() {
  const [location, setLocation] = useState('jakarta')
  const [changeLocation, setChangeLocation] = useState('')
  const { weatherLocation, weatherCurrent, weatherCondition, forecast, forecastDay, astro } = useFetch(changeLocation, location)

  const handleAddLocation = (locationX) => {
    setChangeLocation(locationX)
  }

  return (
    <div className="container mx-auto p-5 flex flex-col gap-5 xl:flex-row">
      <AboutLocation.Provider
          value={{
            location,
            weatherLocation,
            weatherCurrent,
            weatherCondition,
            astro
          }}>
        <div className="lg:w-[35%]">
          <Header
            handleAddLocation={handleAddLocation}
            setLocation={setLocation} />
          <Main forecast={forecast} />
        </div>
        <div className="lg:w-[65%]">
          <Aside forecastDay={forecastDay} />
          <Footer />
        </div>
      </AboutLocation.Provider>
    </div>
  )
}
