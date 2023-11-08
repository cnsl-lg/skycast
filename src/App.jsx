import { createContext, useState } from "react";
import useFetch from "./custom_hook/useFetch";
import Main from "./components/Main";
import Header from "./components/Header";
import Aside from "./components/Aside";

export const AboutLocation = createContext(null)

export default function App() {
  const [location, setLocation] = useState('indonesia')
  const [changeLocation, setChangeLocation] = useState('')
  const { weatherLocation, weatherCurrent, weatherCondition, forecast, forecastDay } = useFetch(changeLocation, location)

  const handleAddLocation = (locationName) => {
    setChangeLocation(locationName)
  }

  return (
    <div className="container mx-auto p-4 flex flex-col gap-5 xl:flex-row">
      <AboutLocation.Provider
          value={{
            location,
            weatherLocation,
            weatherCurrent,
            weatherCondition
          }}>
        <div className="lg:w-[60%]">
          <Header
            handleAddLocation={handleAddLocation}
            setLocation={setLocation} />
          <Main forecastDay={forecastDay} />
        </div>
        <div className="lg:w-[40%]">
          <Aside forecast={forecast} />
        </div>
      </AboutLocation.Provider>
    </div>
  )
}
