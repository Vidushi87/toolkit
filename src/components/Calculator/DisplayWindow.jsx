import React from "react";
import styles from "./Calculator.module.css";

const DisplayWindow = ({ expression, result }) => {
  return (
    <div className={styles.displayWindow}>
      <p className={styles.expression}>{expression}</p>
      <p className={styles.result}>{result}</p>
    </div>
  );
}; 

export default DisplayWindow;
