import React from "react";

export default function CurrentWeather() {
  let weatherData = {
    city: "Melbourne",
    date: "Friday, 27th June 2025, ",
    description: "Few Clouds",
    humidity: "82%",
    windGust: "1.03 Km/h",
  };

  return (
    <div className="current-weather">
      <div>
        <h1 className="current-city"> {weatherData.city}</h1>
        <p className="weather-data">
          <span id="time">{weatherData.date}</span>
          <span id="description"> {weatherData.description}</span>
          <br />
          Humidity:
          <span className="yellow">{weatherData.humidity}</span>, Wind Gust:
          <span className="yellow">{weatherData.windGust} </span>
        </p>
      </div>
    </div>
  );
}
