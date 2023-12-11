import React, { Suspense, useContext } from 'react'
import { AboutLocation } from '../App'

const HeroSection = () => {
  const { weatherLocation, weatherCondition, weatherCurrent } = useContext(AboutLocation)

  return (
    <div className="hero_section">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  )
}

function Loading() {
  return (
    <div role="status" class="max-w-sm animate-pulse">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span class="sr-only">Loading...</span>
    </div>
  )
}

export default HeroSection
