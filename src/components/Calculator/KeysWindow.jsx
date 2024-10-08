import React from "react";
import styles from "./Calculator.module.css";

const KeysWindow = ({ handleButton }) => {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];
  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    "0",
    ".",
    "DEL",
    "AC",
    "=",
  ];
  return (
    <div className={styles.keysWindow}>
      <div className={styles.keysScientific}>
        {sciKeys.map((item, index) => (
          <button
            className={styles.button}
            key={index}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.line}></div>
      <div className={styles.keysBasic}>
        {basicKeys.map((item, index) => (
          <button
            className={`${styles.button} ${
              item >= "0" && item <= "9" ? styles.number : ""
            } ${item === "=" ? styles.equal : ""}`}
            key={index}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;
