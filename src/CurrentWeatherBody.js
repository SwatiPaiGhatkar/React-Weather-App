import React from "react";
import CurrentWeather from "./CurrentWeather";
import CurrentTemperatureDataContainer from "./CurrentTemperatureDataContainer";

export default function CurrentWeatherBody() {
  return (
    <div
      className="CurrentWeatherBody"
      style={{ display: "flex", gap: "120px" }}
    >
      <CurrentWeather />
      <CurrentTemperatureDataContainer />
    </div>
  );
}
