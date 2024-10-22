import React from "react";
import styles from "./Header.module.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div
          className={`d-flex flex-wrap align-items-center justify-content-between ${styles.container}`}
        >
          <Link
            to="/"
            className={` my-2 my-lg-0 me-lg-auto text-white text-decoration-none text-center ${styles.icon}`}
          >
            <i className="bi bi-tools h1 align-items-center justify-content-center d-block" />
            Tool Box
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
