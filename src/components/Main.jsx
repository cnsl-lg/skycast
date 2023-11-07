import ADayForecast from "./ADayForecast";
import ADayForecastList from "./ADayForecastItem";
import HeroSection from "./HeroSection";

const Main = ({ forecastDay }) => {
  return (
    <main>
      <section className="bg-white">
        <HeroSection />
      </section>
      <section className="flex flex-col gap-5">
        <ADayForecast>
          {forecastDay.map(item => (
            <ADayForecastList item={item} key={item.time_epoch} />
          ))}
        </ADayForecast>
      </section>
    </main>
  );
}

export default Main;