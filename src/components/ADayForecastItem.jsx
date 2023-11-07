const ADayForecastList = ({ item }) => {
  const time = item.time.slice(10, 16)
  const newTime = time.replace(':', '')
  let str
  if(newTime < 1200) {
    str = 'AM'
  } else {
    str = 'PM'
  }

  return (
    <li>
      <div className="a_day_forecast_item">
        <p className="flex gap-x-2">
          <span>{time}</span>
          <span>{str}</span>
        </p>
        <img src={item.condition.icon} alt={item.time_epoch} className="w-16 h-16 my-2" />
        <span className="text-white">{item.temp_c}<sup>o</sup></span>
      </div>
    </li>
  );
}

export default ADayForecastList;