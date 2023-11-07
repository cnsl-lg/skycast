import { useContext } from "react";
import { AboutLocation } from "../App";

const AirCondition = () => {
  const { weatherCurrent } = useContext(AboutLocation)

  return (
    <div className="air_condition">
      <h3>Air Condition</h3>
      <div className="text-base sm:text-lg mini:text-sm">
        <div className="flex justify-between">
          <div className="air_condition_item">
            <div className="icon-bar">
              <i className="ri-temp-hot-line"></i>
            </div>
            <div className="status-bar">
              Real feel <p className="air_condition_item_text">{weatherCurrent.feelslike_c}<sup>o</sup></p>
            </div>
          </div>
          <div className="air_condition_item">
            <div className="icon-bar">
              <i className="ri-windy-fill"></i>
            </div>
            <div className="status-bar">
              Wind <p className="air_condition_item_text">{weatherCurrent.wind_kph} km/h</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="air_condition_item">
            <div className="icon-bar">
              <i className="ri-cloud-windy-fill"></i>
            </div>
            <div className="status-bar">
              Cloud <p className="air_condition_item_text">{weatherCurrent.cloud}%</p>
            </div>
          </div>
          <div className="air_condition_item">
            <div className="icon-bar">
              <i className="ri-sun-fill"></i>
            </div>
            <div className="status-bar">
              UV Index <p className="air_condition_item_text">{weatherCurrent.uv}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirCondition;