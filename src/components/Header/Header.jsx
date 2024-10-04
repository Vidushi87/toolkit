import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ${styles.container}`}
        >
          <a
            href="/"
            className={`align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none text-center ${styles.icon}`}
          >
            <i className="bi bi-tools h1 align-items-center justify-content-center d-block" />
            Tool Kit
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#km" className="nav-link text-secondary text-center">
                <i className="bi bi-calculator h2 d-block" />
                Calculator
              </a>
            </li>
            <li>
              <a href="#" className=" nav-link text-secondary text-center">
                <i className="bi bi-check2-square h2 d-block"></i>
                To Do List
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-secondary text-center">
                <i className="bi-currency-exchange h2 d-block" />
                Currency Convertor
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-block nav-link text-secondary text-center"
              >
                <i className="bi bi-arrow-left-right h2 d-block" />
                Unit Converter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-block nav-link text-secondary text-center"
              >
                <i className="bi bi-speedometer2 h2 d-block" />
                BMI Calculator
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-block nav-link text-secondary text-center"
              >
                <i className="bi bi-calendar-event-fill h2 d-block" />
                Calendar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
