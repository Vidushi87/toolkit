import React from "react";
import styles from "./BMICalculator.module.css";
import BMIRange from "./BMIRange";
import CalcForm from "./CalcForm";

const BMICalculator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.BMICalculator}>
        <center>
          <h1>BMI Calculator</h1>
        </center>
        <CalcForm />
      </div>
      <BMIRange />
    </div>
  );
};

export default BMICalculator;
