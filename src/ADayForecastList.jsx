const ADayForecastList = ({ item }) => {
  return (
    <li>
      <div className="font-semibold text-center">
        <span>
          {item.temp_c}<sup>o</sup>
        </span>
        <img src={item.condition.icon} alt={item.time_epoch} />
        <span>{item.windchill_c}km/h<br />{item.time.slice(10, 16)}</span>
      </div>
    </li>
  );
}

export default ADayForecastList;