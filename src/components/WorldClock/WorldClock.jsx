import React from "react";
import styles from "./WorldClock.module.css";
import ClockDashboard from "./ClockDashboard";

const WorldClock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.worldClock}>
        <center>
          <h1>World Clock</h1>
        </center>
        <ClockDashboard />
      </div>
    </div>
  );
};

export default WorldClock;
