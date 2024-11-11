import React from "react";
import styles from "./BMICalculator.module.css";

const BMIRange = () => {
  const bmiCategories = [
    { category: "Underweight", range: "BMI < 18.5" },
    { category: "Normal weight", range: "18.5 ≤ BMI < 24.9" },
    { category: "Overweight", range: "25 ≤ BMI < 29.9" },
    { category: "Obesity", range: "BMI ≥ 30" },
  ];

  return (
    <div className={styles.bmiRange}>
      <div className={styles.rangeHeader}>
        <h3>BMI Categories</h3>
      </div>
      <div className={styles.rangeTable}>
        <table className={styles.bmiTable}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            {bmiCategories.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BMIRange;
