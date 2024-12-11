import SearchCity from "./SearchCity";
import styles from "./Weather.module.css";
import React, { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";

const WeatherDashboard = ({ apiKey }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    setCityWeather("London");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let city = event.target.city.value;
    if (!city) {
      alert("Please provide city name!");
      return;
    }
    setCityWeather(city);
  };

  const setCityWeather = (city) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setWeather({
          icon: data.current.condition.icon,
          temp: data.current.temp_c,
          city: data.location.name,
          humidity: data.current.humidity,
          speed: data.current.wind_kph,
          feels: data.current.feelslike_c,
          condition: data.current.condition.text,
        });
      })
      .catch((error) => {
        alert("Unabele to fetch the Weather Forecast");
      });
  };

  return (
    <div className={styles.weatherDashboard}>
      <SearchCity handleSubmit={handleSubmit} />
      <WeatherDetails weather={weather} />
    </div>
  );
};

export default WeatherDashboard;
