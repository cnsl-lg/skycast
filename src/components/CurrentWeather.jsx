const CurrentWeather = ({ weatherLocation, weatherCurrent, weatherCondition }) => {
  return (
    <figure className="CurrentWeather text-sky-900 text-center my-5">
      <h3 className="text-2xl font-semibold">{weatherLocation.name}</h3>
      <img
        src={weatherCondition.icon}
        alt={weatherLocation.name}
        className="w-40 mx-auto" />
      <figcaption>
        <h1 className="text-5xl font-semibold mb-2">{weatherCurrent.temp_c}<sup>o</sup></h1>
        <p className="font-medium">{weatherCondition.text}</p>
      </figcaption>
    </figure>
  );
}

export default CurrentWeather;