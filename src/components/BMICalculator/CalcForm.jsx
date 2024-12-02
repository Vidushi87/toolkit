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
  const [idealWeightRange, setIdealWeightRange] = useState("");

  const calculateBMI = () => {
    let calculatedBMI;
    let heightInInches;
    if (weight) {
      if (unitType === "metricSystem") {
        const heightInMeters = height / 100;
        calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        calculateIdealWeightRange(heightInMeters, "metricSystem");
      } else if (unitType === "imperialSystem") {
        console.log("reached here");
        heightInInches = parseInt(feet || 0) * 12 + parseInt(inches || 0);
        if (heightInInches > 0 && weight > 0) {
          calculatedBMI = (
            (weight / (heightInInches * heightInInches)) *
            703
          ).toFixed(2);
          calculateIdealWeightRange(heightInMeters, "imperialSystem");
        }
      }

      if (calculatedBMI) {
        setBmi(calculatedBMI);
        if (calculatedBMI < 18.5) {
          setCategory("Underweight");
        } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
          setCategory("Normal weight");
        } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
          setCategory("Overweight");
        } else {
          setCategory("Obese");
        }
      }
    }
  };

  const calculateIdealWeightRange = (height, system) => {
    let minWeight, maxWeight;
    if (system === "metricSystem") {
      minWeight = (18.5 * height * height).toFixed(1);
      maxWeight = (24.9 * height * height).toFixed(1);
    } else if (system === "imperialSystem") {
      minWeight = ((18.5 * height * height) / 703).toFixed(1);
      maxWeight = ((24.9 * height * height) / 703).toFixed(1);
    }
    setIdealWeightRange(
      `${minWeight} - ${maxWeight} ${system === "metricSystem" ? "kg" : "lbs"}`
    );
  };

  const clearForm = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setCategory("");
    setIdealWeightRange("");
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
          className={`btn btn-outline-secondary`}
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
          <br />
          Ideal Weight Range: {idealWeightRange}
        </p>
      )}
    </div>
  );
};

export default CalcForm;
