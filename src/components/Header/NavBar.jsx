import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
        <li>
          <Link
            to="/calculator"
            className="nav-link text-secondary text-center"
          >
            <i className="bi bi-calculator h2 d-block" />
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/todolist" className=" nav-link text-secondary text-center">
            <i className="bi bi-check2-square h2 d-block"></i>
            To Do List
          </Link>
        </li>
        <li>
          <Link
            to="/currencyconverter"
            className="nav-link text-secondary text-center"
          >
            <i className="bi-currency-exchange h2 d-block" />
            Currency Converter
          </Link>
        </li>
        <li>
          <Link
            to="/unitconverter"
            className="nav-link text-secondary text-center"
          >
            <i className="bi bi-arrow-left-right h2 d-block" />
            Unit Converter
          </Link>
        </li>
        <li>
          <Link
            to="/bmicalculator"
            className="nav-link text-secondary text-center"
          >
            <i className="bi bi-speedometer2 h2 d-block" />
            BMI Calculator
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="nav-link text-secondary text-center">
            <i className="bi bi-calendar-event-fill h2 d-block" />
            Calendar
          </Link>
        </li>
        <li>
          <Link
            to="/worldClock"
            className="nav-link text-secondary text-center"
          >
            <i className="bi bi-globe-central-south-asia h2 d-block" />
            World Clock
          </Link>
        </li>
      </ul>
     {/*  <div className={styles.menu}> //https://www.youtube.com/watch?v=17l6AOc8s10
        menu
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </nav>
  );
};

export default NavBar;
