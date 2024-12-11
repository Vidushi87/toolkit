import React from "react";
import styles from "./Weather.module.css";

const WeatherDetails = ({ weather }) => {
  return (
    <div className="min-w-50 d-flex flex-column justify-content-center align-items-center mt-4">
      <img src={weather.icon} alt="..." />
      <h3 className="display-4 fw-medium">{weather.temp} °C</h3>
      <h5 className="fw-small">{weather.condition}</h5>
      <h1 className="mb-5 text-white">{weather.city}</h1>
      <div className="row w-100 mb-3">
        <div className="col d-flex justify-content-center">
          <i className="bi bi-water me-2"></i>
          <p>
            Humidity <br />
            {weather.humidity} %
          </p>
        </div>
        <div className="col d-flex justify-content-center">
          <i className="bi bi-wind me-2"></i> Feels Like <br />
          {weather.feels} °C
        </div>{" "}
        <div className="col d-flex justify-content-center">
          <i className="bi bi-wind me-2"></i> Wind Speed <br />
          {weather.speed} km/h
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
