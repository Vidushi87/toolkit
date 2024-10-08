import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={`py-3 my-4 ${styles.footer}`}>
        <p className={`text-center text-light ${styles.developer}`}>
          Developed by 🧑‍💻 <span>Vidushi Pandey</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
