import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <header>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/164/360/original/appLogo.jpg?1745892162"
          alt="weatherAppLogo"
          className="app-logo"
        />
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <hr ClassName="line" />
      </header>
    </div>
  );
}
