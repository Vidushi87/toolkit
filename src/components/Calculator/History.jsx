import React from "react";
import styles from "./Calculator.module.css";

const History = ({ clearHistory, history }) => {
  return (
    <div className={styles.history}>
      <div className={styles.historyHeader}>
        <h2>History</h2>
        <button onClick={clearHistory} className={styles.clearButton}>
          Clear
        </button>
      </div>
      <div className={styles.historyContainer}>
        {history.length > 0 ? (
          <ul className={styles.historyList}>
            {history.map((item, index) => (
              <li key={index} className={styles.historyItem}>
                {item.expression} = {item.result}
              </li>
            ))}
          </ul>
        ) : (
          <p>No history yet</p>
        )}
      </div>
    </div>
  );
};

export default History;
