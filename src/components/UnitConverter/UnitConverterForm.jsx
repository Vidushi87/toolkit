import React, { useState } from "react";
import { create, all } from "mathjs";
import styles from "./UnitConverter.module.css";
import UnitSelect from "./UnitSelect";

// Initialize mathjs with the default configuration
const math = create(all);

const UnitConverterForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [unitType, setUnitType] = useState("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");

  // Conversion categories and example units
  const units = {
    length: ["m", "cm", "mm", "ft", "in", "mi", "km"],
    temperature: ["degC", "degF", "K"],
    area: ["m2", "cm2", "ft2", "in2"],
    volume: ["l", "ml", "m3", "ft3", "in3"],
    weight: ["kg", "g", "lb", "oz"],
  };

  const handleConversion = () => {
    try {
      // Perform conversion using mathjs
      const convertedValue = math
        .unit(inputValue, fromUnit)
        .to(toUnit)
        .toNumber();
      setResult(convertedValue.toFixed(2)); // Formatting to 2 decimal places
    } catch (error) {
      console.error("Error during conversion:", error);
      setResult("Invalid conversion");
    }
  };

  // Update available units when unitType changes
  const handleUnitTypeChange = (type) => {
    setUnitType(type);
    const defaultUnits = units[type] || [];
    setFromUnit(defaultUnits[0] || "");
    setToUnit(defaultUnits[1] || "");
  };
  return (
    <div className={styles.convertUnit}>
      <div>
        <label>Convert:</label>
        <select
          onChange={(e) => handleUnitTypeChange(e.target.value)}
          value={unitType}
        >
          <option value="length">Length</option>
          <option value="temperature">Temperature</option>
          <option value="area">Area</option>
          <option value="volume">Volume</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div className={`input-group ${styles.inputGroup}`}>
        <span className={`input-group-text ${styles.spanElement}`}>
          Enter value
        </span>
        <input
          type="number"
          className={`form-control ${styles.inputValue}`}
          aria-label="Enter value"
          aria-describedby="basic-addon1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setInputValue("")}
          required
        />
      </div>
      <div className={styles.converterForm}>
        <label>From:</label>
        <UnitSelect
          selectedValue={fromUnit}
          handleUnitChange={(e) => setFromUnit(e.target.value)}
          units={units}
          unitType={unitType}
        />
        <label>To:</label>
        <UnitSelect
          selectedValue={toUnit}
          handleUnitChange={(e) => setToUnit(e.target.value)}
          units={units}
          unitType={unitType}
        />
      </div>
      <button
        className={"btn btn-outline-secondary"}
        onClick={handleConversion}
      >
        Convert
      </button>
      {result && (
        <p className={styles.conversionResult}>Converted Value: {result}</p>
      )}
    </div>
  );
};

export default UnitConverterForm;
