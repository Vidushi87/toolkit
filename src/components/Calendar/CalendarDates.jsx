import React from "react";
import styles from "./Calendar.module.css";

const CalendarDates = (prefixDays, suffixDays, numDays,isToday,isSelectedDate, handleDateClick) => {
  return (
    <div className={`row border ${styles.dateRow}`}>
      {Array.from({ length: prefixDays }).map((_, index) => {
        return <div key={index} className="col border-end border-bottom p-2" />;
      })}

      {Array.from({ length: numDays }).map((_, index) => {
        const day = index + 1;
        return (
          <div
            key={day}
            className={`col border-end border-bottom p-2 ${
              isToday(day)
                ? styles.todayDate
                : isSelectedDate(day)
                ? styles.selectedDate
                : styles.date
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        );
      })}
      {Array.from({ length: suffixDays }).map((_, index) => {
        return <div key={index} className="col border-end border-bottom p-2" />;
      })}
    </div>
  );
};

export default CalendarDates;
