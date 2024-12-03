import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "/calculator", label: "Calculator", icon: "bi-calculator" },
    { to: "/notes", label: "Notes", icon: "bi-check2-square" },
    {
      to: "/currencyconverter",
      label: "Currency Converter",
      icon: "bi-currency-exchange",
    },
    {
      to: "/unitconverter",
      label: "Unit Converter",
      icon: "bi-arrow-left-right",
    },
    { to: "/bmicalculator", label: "BMI Calculator", icon: "bi-speedometer2" },
    { to: "/calendar", label: "Calendar", icon: "bi-calendar-event-fill" },
    {
      to: "/worldClock",
      label: "World Clock",
      icon: "bi-globe-central-south-asia",
    },
    { to: "/weather", label: "Weather", icon: "bi-cloud-lightning-rain-fill" },
  ];

  return (
    <header className="bg-dark sticky-top">
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark py-3 ${styles.navbar}`}
      >
        <div className="container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand">
            <i className="bi bi-tools h1 me-2"></i>
            <span>Tool Box</span>
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className={`navbar-toggler ms-auto ${styles.hamburger}`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto text-center">
              {/* Menu Items */}
              {menuItems.map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link d-flex align-items-center ${
                        isActive ? styles.active : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <i
                          className={`bi ${item.icon} me-2 ${styles.navIcon} ${
                            isActive ? styles.activeIcon : ""
                          }`}
                        ></i>
                        {item.label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
