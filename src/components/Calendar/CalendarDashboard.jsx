import React, { useState } from "react";
import styles from "./Calendar.module.css";
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  startOfMonth,
  sub,
} from "date-fns";
import CalendarNav from "./CalendarNav";

const daysofWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date
  const today = new Date();

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => {
    const updatedDate = sub(currentDate, { months: 1 });
    console.log("Previous Month Date:", updatedDate); // Debugging log
    setCurrentDate(updatedDate);
  };

  const nextMonth = () => {
    const updatedDate = add(currentDate, { months: 1 });
    console.log("Next Month Date:", updatedDate); // Debugging log
    setCurrentDate(updatedDate);
  };

  const prevYear = () => {
    const updatedDate = sub(currentDate, { years: 1 });
    console.log("Previous Month Date:", updatedDate); // Debugging log
    setCurrentDate(updatedDate);
  };

  const nextYear = () => {
    const updatedDate = add(currentDate, { years: 1 });
    console.log("Next Month Date:", updatedDate); // Debugging log
    setCurrentDate(updatedDate);
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(clickedDate); // Set the selected date
  };

  const isSelectedDate = (day) => {
    return (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const isToday = (day) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <div className="p-3 border-top border-secondary border-3">
      <CalendarNav
        prevYear={prevYear}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        nextYear={nextYear}
        currentDate={currentDate}
      />
      <div className={styles.division}></div>
      <div className="container text-center rounded-1 text-secondary">
        <div className="row border">
          {daysofWeek.map((day) => (
            <div key={day} className="col border-end p-1 fs-6 fw-semibold">
              {day}
            </div>
          ))}
        </div>
        <div className={`row border ${styles.dateRow}`}>
          {Array.from({ length: prefixDays }).map((_, index) => {
            return (
              <div key={index} className="col border-end border-bottom p-2" />
            );
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
            return (
              <div key={index} className="col border-end border-bottom p-2" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarDashboard;
