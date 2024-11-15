import React from "react";
import styles from "./Calendar.module.css";
import CalenderDashboard from "./CalendarDashboard";

const Calendar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <center>
          <h1>Calendar</h1>
        </center>
        <CalenderDashboard />
      </div>
    </div>
  );
};

export default Calendar;
