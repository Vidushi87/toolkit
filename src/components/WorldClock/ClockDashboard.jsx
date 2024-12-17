import React, { useState, useEffect } from "react";
import styles from "./WorldClock.module.css";
import Clocks from "./Clocks";

const ClockDashboard = () => {
  const [timeZones, setTimeZones] = useState([]);
  const [selectedCities, setSelectedCities] = useState([
    { city: "India", timezone: "Asia/Kolkata" },
    { city: "UK", timezone: "Europe/London" },
    { city: "Tokyo", timezone: "Asia/Tokyo" },
    { city: "US", timezone: "America/New_York" },
  ]);
  const [localTimes, setLocalTimes] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // For search filter

  const API_KEY = "J1XYU22DA79P"; // Replace with your API key

  const fetchTimeZones = async () => {
    try {
      const response = await fetch(
        `https://api.timezonedb.com/v2.1/list-time-zone?key=${API_KEY}&format=json`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setTimeZones(data.zones);
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

  const getTimeForCity = (timezone) => {
    const options = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const timeFormatter = new Intl.DateTimeFormat("en-US", options);
    return timeFormatter.format(new Date());
  };

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = {};

      for (let { city, timezone } of selectedCities) {
        const time = getTimeForCity(timezone);
        updatedTimes[timezone] = time;
      }

      setLocalTimes(updatedTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000); // Update every 10 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [selectedCities]);

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

  const filteredTimeZones = timeZones.filter((timezone) =>
    timezone.zoneName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {/* Display selected cities only if there are any */}
              {selectedCities.length > 0 && (
                <>
                  <div className="dropdown-header">
                    <strong>Selected Cities</strong>
                  </div>
                  {selectedCities.map(({ city, timezone }) => (
                    <li key={timezone}>
                      <button
                        className="dropdown-item active"
                        onClick={() => handleCitySelection(city, timezone)}
                      >
                        {city} ({timezone})
                      </button>
                    </li>
                  ))}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </>
              )}

              {/* Search input */}
              <input
                type="text"
                className="form-control"
                placeholder="Search for a city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Display filtered time zones */}
              {filteredTimeZones.length > 0 ? (
                filteredTimeZones.map((timezone) => {
                  const city = timezone.zoneName.split("/")[1];
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
                <li className="dropdown-item">No results found</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Clocks */}
      <Clocks selectedCities={selectedCities} localTimes={localTimes} />
    </div>
  );
};

export default ClockDashboard;
