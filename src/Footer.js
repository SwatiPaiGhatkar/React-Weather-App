import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <hr ClassName="line" />
      <footer>
        This project was coded by
        <a
          href="https://github.com/SwatiPaiGhatkar"
          target="_blank"
          rel="noreferrer"
        >
          Swati Pai
        </a>
        and is hosted on
        <a
          href="https://react-weather-app-meteo.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        and is on
        <a
          href="https://github.com/SwatiPaiGhatkar/React-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          GitHub.
        </a>
      </footer>
    </div>
  );
}
