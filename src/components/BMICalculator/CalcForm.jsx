import React, { useState } from "react";
import styles from "./BMICalculator.module.css";

const CalcForm = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState();
  const [category, setCategory] = useState("");
  const [unitType, setUnitType] = useState("metricSystem");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const calculateBMI = () => {
    let calculatedBMI;
    let heightInInches;
    if (weight) {
      if (unitType === "metricSystem") {
        const heightInMeters = height / 100;
        calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      } else if (unitType === "imperialSystem") {
        console.log("reached here");
        heightInInches = parseInt(feet || 0) * 12 + parseInt(inches || 0);
        if (heightInInches > 0 && weight > 0) {
          calculatedBMI = (
            (weight / (heightInInches * heightInInches)) *
            703
          ).toFixed(2);
        }
      }

      if (calculatedBMI) {
        setBmi(calculatedBMI);
        if (bmi < 18.5) {
          setCategory("Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          setCategory("Normal weight");
        } else if (bmi >= 25 && bmi <= 29.9) {
          setCategory("Overweight");
        } else {
          setCategory("Obese");
        }
      }
    }
  };

  const clearForm = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setCategory("");
    setFeet("");
    setInches("");
  };

  return (
    <div className={styles.displayWindow}>
      <div>
        <label> Measure Type :</label>
        <select onChange={(e) => setUnitType(e.target.value)} value={unitType}>
          <option value="metricSystem">Metric System</option>
          <option value="imperialSystem">Imperial System</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>Weight ({unitType === "metricSystem" ? "kg" : "lbs"}) :</label>
        <input
          className={`form-control ${styles.inputValue}`}
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your Weight.."
        />
      </div>
      <div className={styles.inputGroup}>
        {unitType === "metricSystem" ? (
          <>
            <label>Height (cm) :</label>
            <input
              className={`form-control ${styles.inputValue}`}
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your Height.."
            />
          </>
        ) : (
          <>
            <label>Height:</label>
            <input
              className={`form-control ${styles.inputValue}`}
              type="number"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              placeholder="Feet"
            />
            <input
              className={`form-control ${styles.inputValue}`}
              type="number"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="Inches"
            />
          </>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          className={`btn btn-outline-secondary ${styles.submitButton}`}
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        {bmi && (
          <button
            className={`btn btn-outline-danger ${styles.clearButton}`}
            onClick={clearForm}
          >
            Clear
          </button>
        )}
      </div>
      {bmi && (
        <p className={styles.bmiResult}>
          Your BMI : {bmi}
          <br />
          Your Category: {category}
        </p>
      )}
    </div>
  );
};

export default CalcForm;
