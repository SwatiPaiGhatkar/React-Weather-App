import Footer from "./Footer";
import Search from "./Search";
import CurrentWeatherBody from "./CurrentWeatherBody";

export default function WeatherContainer() {
  return (
    <div className="weather-app">
      <Search />
      <CurrentWeatherBody />
      <Footer />
    </div>
  );
}
