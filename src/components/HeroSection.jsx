import React, { useContext } from 'react'
import { AboutLocation } from '../App'

const HeroSection = () => {
  const { weatherLocation, weatherCondition, weatherCurrent } = useContext(AboutLocation)

  return (
    <div className="hero_section">
      <div className="sm:w-[70%]">
        <h1 className="hero_title_location">{weatherLocation.name}</h1>
        <p className="hero_info_text">{weatherCondition.text}</p>
        <h2 className="hero_info_temperature">{weatherCurrent.temp_c}<sup>o</sup></h2>
      </div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 sm:w-[30%]">
        <div className="relative overflow-hidden rounded-full">
          <img
            src={weatherCondition.icon}
            alt={weatherLocation.name}
            className="mx-auto w-36 h-36 sm:w-40 sm:h-40 mini:w-32 mini:h-32" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
