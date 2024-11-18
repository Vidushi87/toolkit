import React from "react";
import styles from "./WorldClock.module.css";

const Clocks = ({ selectedCities, localTimes }) => {
  return (
    <div className="row">
      {selectedCities.map(({ city, timezone }) => (
        <div className={`col-md-3 mb-4`} key={timezone}>
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
  );
};

export default Clocks;
