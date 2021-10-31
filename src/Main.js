import React, { useState } from "react";

const api = {
  key: "74d29596a15dfae466ca40c06db916b6",
};

function Main() {
  const [query, setQuery] = useState("Pokhara");
  const [weather, setWeather] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };
  return (
    // <div className="app">
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app-warm"
            : "app"
          : "app"
      }
    >
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search..."
              type="text"
              className="search-box"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            ></input>
          </form>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="temperature">{Math.round(weather.main.temp)}°C</div>
            <div className="day-type">{weather.weather[0].main}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Main;
