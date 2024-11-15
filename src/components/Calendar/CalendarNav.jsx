import React from "react";
import styles from "./Calendar.module.css";
import { format } from "date-fns";


const CalendarNav = ({
  prevMonth,
  prevYear,
  nextMonth,
  nextYear,
  currentDate,
}) => {
  return (
    <div
      className={`container text-center border border-dark-subtle rounded-1 fw-semibold ${styles.calendarNav}
    `}
    >
      <div className="row">
        <div
          className={`col border-end p-1 ${styles.navRow}`}
          onClick={prevYear}
        >
          {"<<"}
        </div>
        <div
          className={`col border-end p-1 ${styles.navRow}`}
          onClick={prevMonth}
        >
          {"<"}
        </div>
        <div className={`col col-6 border-end p-1`}>
          {format(currentDate, "LLLL yyyy")}
        </div>
        <div
          className={`col border-end p-1 ${styles.navRow}`}
          onClick={nextMonth}
        >
          {">"}
        </div>
        <div className={`col p-1 ${styles.navRow}`} onClick={nextYear}>
          {">>"}
        </div>
      </div>
    </div>
  );
};

export default CalendarNav;
