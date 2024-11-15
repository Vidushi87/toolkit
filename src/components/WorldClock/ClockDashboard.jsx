//const API_KEY = "J1XYU22DA79P";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WorldClock.module.css";

const WorldClockApp = () => {
  const [timeZones, setTimeZones] = useState([]); // To store the list of city/region timezones
  const [selectedCities, setSelectedCities] = useState([
    { city: "India", timezone: "Asia/Kolkata" },
    { city: "UK", timezone: "Europe/London" },
    { city: "Tokyo", timezone: "Asia/Tokyo" },
    { city: "US", timezone: "America/New_York" },
  ]);
  const [localTimes, setLocalTimes] = useState({});

  const API_KEY = "YOUR_TIMEZONEDB_API_KEY"; // Replace with your API key

  // Fetch the list of time zones from TimeZoneDB
  const fetchTimeZones = async () => {
    try {
      // Use the correct endpoint for retrieving all time zones
      const response = await fetch(
        `https://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setTimeZones(data.zones); // Assuming the API returns a `zones` array with time zones
      } else {
        console.error("Failed to fetch time zones:", data.message);
      }
    } catch (error) {
      console.error("Error fetching time zones:", error);
    }
  };

  useEffect(() => {
    fetchTimeZones(); // Fetch time zones on component mount
  }, []);

  // Function to get the current time for a given timezone
  const getTimeForCity = (timezone) => {
    const options = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const timeFormatter = new Intl.DateTimeFormat("en-US", options);
    return timeFormatter.format(new Date()); // Format time in specified timezone
  };

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = {};

      for (let { city, timezone } of selectedCities) {
        const time = getTimeForCity(timezone); // Use the Intl.DateTimeFormat
        updatedTimes[timezone] = time;
      }

      setLocalTimes(updatedTimes);
    };

    updateTimes(); // Initial fetch
    const interval = setInterval(updateTimes, 10000); // Update every 10 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [selectedCities]);

  // Handle city selection from dropdown
  const handleCitySelection = (city, timezone) => {
    const alreadySelected = selectedCities.find(
      (item) => item.timezone === timezone
    );

    if (alreadySelected) {
      setSelectedCities((prev) =>
        prev.filter((item) => item.timezone !== timezone)
      );
    } else if (selectedCities.length < 4) {
      setSelectedCities((prev) => [...prev, { city, timezone }]);
    } else {
      alert("You can only select up to 4 cities at a time.");
    }
  };

  return (
    <div
      className={`border-top border-secondary border-3 p-3 ${styles.textWhite}`}
    >
      <div className={`row mb-4 ${styles.citySelector}`}>
        <div className="col-12">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select City
            </button>
            <ul
              className={`dropdown-menu ${styles.dropdownMenu}`}
              style={{ maxHeight: "200px", overflowY: "scroll" }}
            >
              {timeZones && timeZones.length > 0 ? (
                timeZones.map((timezone) => {
                  const city = timezone.zoneName.split("/")[1]; // Extract city from timezone
                  return (
                    <li key={timezone.zoneName}>
                      <button
                        className={`dropdown-item ${
                          selectedCities.some(
                            (item) => item.timezone === timezone.zoneName
                          )
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          handleCitySelection(city, timezone.zoneName)
                        }
                      >
                        {city} ({timezone.zoneName})
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="dropdown-item">Loading...</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Clocks */}
      <div className="row">
        {selectedCities.map(({ city, timezone }) => (
          <div
            className={`col-md-3 mb-4`}
            key={timezone}
          >
            <div className={`${styles.clockCard} text-center`}>
              <div className={styles.clockHeader}>{city}</div>
              <div className={styles.cardBody}>
                <h5 className={styles.clockTitle}>
                  {localTimes[timezone] || "Loading..."}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClockApp;
