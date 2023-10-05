import ADayForecast from "./ADayForecast";
import ADayForecastList from "./ADayForecastList";
import Astro from "./Astro";
import MoreInfo from "./MoreInfo";

const Aside = ({ forecastDay }) => {
  return (
    <aside className="flex flex-col gap-5">
      <ADayForecast>
        {forecastDay.map(item => (
          <ADayForecastList item={item} key={item.time_epoch} />
        ))}
      </ADayForecast>
      <div className="flex flex-col gap-5 lg:flex-row">
        <Astro />
        <MoreInfo />
      </div>
    </aside>
  );
}
 
export default Aside;