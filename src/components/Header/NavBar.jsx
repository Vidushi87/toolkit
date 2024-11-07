import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div
        className={`col-12 col-lg-auto my-2 my-md-0 ${styles.menu}`}
        onClick={toggleMenu}
      >
        <i className="bi bi-list h1 d-block" />
      </div>
      <ul
        className={`nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small ${
          isMenuOpen ? styles.showMenu : styles.hideMenu
        }`}
      >
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-calculator h2 d-block icon-link-hover ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                Calculator
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todolist"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-check2-square h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                ></i>
                To Do List
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/currencyconverter"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi-currency-exchange h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                Currency Converter
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/unitconverter"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-arrow-left-right h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                Unit Converter
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bmicalculator"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-speedometer2 h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                BMI Calculator
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-calendar-event-fill h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                Calendar
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/worldClock"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-globe-central-south-asia h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                World Clock
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weather"
            className={({ isActive }) =>
              `nav-link text-center ${
                isActive ? styles.active : "text-secondary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`bi bi-cloud-lightning-rain-fill h2 d-block ${
                    isActive ? styles.activeIcon : ""
                  }`}
                />
                Weather
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
