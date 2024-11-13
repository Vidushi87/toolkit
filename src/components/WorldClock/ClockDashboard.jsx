import React, { useEffect, useState } from "react";
import axios from "axios";

const cities = [
  { label: "New York", timezone: "America/New_York" },
  { label: "London", timezone: "Europe/London" },
  { label: "Frankfurt", timezone: "Europe/Berlin" },
  { label: "Tokyo", timezone: "Asia/Tokyo" },
  { label: "Sydney", timezone: "Australia/Sydney" },
  { label: "Paris", timezone: "Europe/Paris" },
  { label: "Dubai", timezone: "Asia/Dubai" },
  { label: "Moscow", timezone: "Europe/Moscow" },
  { label: "Los Angeles", timezone: "America/Los_Angeles" },
];

const ClockDashboard = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [cityTimes, setCityTimes] = useState({});

  // Fetch time for each selected city
  const fetchTime = async (city) => {
    try {
      const response = await axios.get(
        `https://worldtimeapi.org/api/timezone/${city.timezone}`
      );
      setCityTimes((prevTimes) => ({
        ...prevTimes,
        [city.label]: new Date(response.data.datetime).toLocaleTimeString(),
      }));
    } catch (error) {
      console.error("Error fetching time for", city.label, error);
    }
  };

  // Update times every second
  useEffect(() => {
    const interval = setInterval(() => {
      selectedCities.forEach((city) => fetchTime(city));
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedCities]);

  const handleCityChange = (e) => {
    const city = cities.find((c) => c.label === e.target.value);
    if (!city) return;

    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter((c) => c !== city));
      setCityTimes((prevTimes) => {
        const updatedTimes = { ...prevTimes };
        delete updatedTimes[city.label];
        return updatedTimes;
      });
    } else if (selectedCities.length < 4) {
      setSelectedCities([...selectedCities, city]);
      fetchTime(city);
    }
  };
  return (
    <div className="container text-center mt-5">
      <h1 className="text-white">World Clock Dashboard</h1>

      {/* City Selector */}
      <select className="form-select mt-4" onChange={handleCityChange}>
        <option>Select a city (up to 4)</option>
        {cities.map((city) => (
          <option key={city.label} value={city.label}>
            {city.label}
          </option>
        ))}
      </select>

      <div className="d-flex justify-content-center mt-5 flex-wrap">
        {selectedCities.map((city) => (
          <div key={city.label} className="p-3">
            <div className="rounded-circle clock-circle d-flex flex-column align-items-center justify-content-center text-white">
              <h4>{city.label}</h4>
              <h5>{cityTimes[city.label]}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClockDashboard;
