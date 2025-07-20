import React from "react";

export default function CurrentTemperatureDataContainer() {
  return (
    <div className="current-temperature-data-container">
      <div id="icon" className="emojie">
        ⛅
      </div>
      <div className="degrees" id="temp">
        20
      </div>
      <div className="unit">°C</div>
    </div>
  );
}
