import React from "react";

const UnitSelect = (props) => {
  const { selectedValue, handleUnitChange, units, unitType } = props;
  return (
    <select value={selectedValue} onChange={handleUnitChange}>
      {units[unitType].map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  );
};

export default UnitSelect;
